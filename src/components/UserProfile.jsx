// @ts-check
import './UserProfile.css'

/**
 * UserProfile component
 * @param {import('../@types').UserProfileProps} props 
 */
export default function UserProfile({ userId, photos, users, setShowUser }) {
    const user = users.find(user => user.id === userId)
    return (
        <section>
            <h2>User profile</h2>
            <div className='userProfile'>
                <img src={photos[userId].thumbnailUrl} />
                <div className='userProfileData'>
                    <span>{user.name}</span>
                    <span>{user.phone}</span>
                    <span>{user.website}</span>
                </div>
            </div>
            <button onClick={e => {
                setShowUser(false)
            }}>Back to main</button>
        </section>
    )
}
