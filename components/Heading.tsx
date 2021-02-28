interface HeadingProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Heading({ size = 1, children }: HeadingProps & JSX.ElementChildrenAttribute) {
  switch (size) {
    case 1:
      return <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 text-7xl font-bold">{children}</h1>
    case 2:
      return <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 text-4xl font-bold">{children}</h2>
    case 3:
      return <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300 text-3xl font-bold">{children}</h3>
    case 4:
      return <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300 text-2xl font-bold">{children}</h4>
    case 5:
      return <h5 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300 text-xl font-bold">{children}</h5>
    case 6:
      return <h6 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300 text-lg font-bold">{children}</h6>
  }
}