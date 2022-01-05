import './SocialCard.css'
import Location from './Location'
import PhoneNumber from './PhoneNumber'
const SocialCard = ({ userData }) => {
  return (
    <div className='card'>
      <div className='profile-top'>
        <div className='card_title'>
          {userData.name.first} {userData.last}
        </div>
        <div className='card_image'>
          <img src={userData.picture.medium} />
        </div>
      </div>

      <div className='profile-bottom'>
        <Location location={userData.location} />
        <PhoneNumber type='Home' number={userData.phone}></PhoneNumber>
        <PhoneNumber type='Mobile' number={userData.cell}></PhoneNumber>
      </div>
    </div>
  )
}
export default SocialCard
