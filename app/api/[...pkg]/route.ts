import { format, endOfMonth, subMonths } from 'date-fns'

export const fetchCache = 'force-no-store'

async function fetchNpmPackage(pkg: string) {
  const res = await fetch('https://registry.npmjs.org/' + pkg)
  const data = await res.json()
  return {
    name: data.name,
    description: data.description,
    version: data['dist-tags'].latest,
    homepage: data.homepage
  }
}

async function fetchNpmDownloads(pkg: string, until: string) {
  const query = new URLSearchParams({
    package: pkg,
    from: '2010-01-01',
    until
  })
  const res = await fetch('https://npm-stat.com/api/download-counts?' + query.toString())
  const data = (await res.json())[pkg]
  for (const date in data) {
    if (data[date] > 0) {
      return data
    }
    delete data[date]
  }
  return data
}

export async function GET(request: Request, { params: { pkg } }: { params: { pkg: string[] } }) {
  const pkgName = decodeURIComponent(pkg.join('/'))

  // Get end of last month
  const until = format(endOfMonth(subMonths(new Date(), 1)), 'yyyy-MM-dd')

  const packageInfo = await fetchNpmPackage(pkgName)
  const downloads = await fetchNpmDownloads(pkgName, until)

  return Response.json({ ...packageInfo, downloads })
}
