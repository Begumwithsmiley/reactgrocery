import Image from 'next/image'

export default function Home() {
  return (
  <div className="rating gap-1 text-3xl font-bold underline">
    Hello world!
    <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
    <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"  />
    <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
    <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
    <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
  </div>
  )
}
