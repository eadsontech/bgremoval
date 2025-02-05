import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 lg:px-44 py-3">
        <img width={150} src={assets.logo} alt="logo" />
        <p className="flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">Copyright &copy; Eadson Technologies. All rights reserved.</p>
        <div className="flex gap-1">
            <img src={assets.facebook_icon} alt="facebook icon" />
            <img src={assets.google_plus_icon} alt="google icon" />
            <img src={assets.twitter_icon} alt="twitter icon" />
        </div>
    </div>
  )
}
export default Footer