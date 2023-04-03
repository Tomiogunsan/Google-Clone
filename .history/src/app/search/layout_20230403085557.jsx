import SearchHeader from "@/components/SearchHeader"
import '..'


export const metadata = {
  title: 'Google Clone',
  description: 'Generated by create next app',
}

export default function SearchLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SearchHeader />
        {children}
        {/* footer */}
       
        </body>
    </html>
  )
}
