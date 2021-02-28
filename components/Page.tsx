
export default function Page({ children }) {
  return <>
    <div className="flex flex-col lg:flex-row container mx-auto">
      {children}
    </div>
    <div className="bg-gray-900 h-16 text-gray-200 text-center">
      <span>Designed and built by Thomas Albrighton</span>
    </div>
  </>
}