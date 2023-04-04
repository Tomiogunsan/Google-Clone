import SearchHeader from "@/components/SearchHeader"
import './../../app/gl'


export const metadata = {
  title: 'Google Clone',
  description: 'Generated by create next app',
}

export default function SearchLayout({ children }) {
  return (
    
      <div>
        <SearchHeader />
        {children}
        {/* footer */}
       
        </div>
    
  )
}