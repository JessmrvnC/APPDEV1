import { useState } from "react";

const userData = {
    name: "Jess Marvin Carbonel",
    avatarUrl:
        "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-1/453629519_476062075163134_3977666760826994092_n.jpg?stp=dst-jpg_tt6&cstp=mx944x960&ctp=s200x200&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGRC3_rAcjFmyFX6hN-uDQBHBLx8nowICYcEvHyejAgJhpDXTWlVV8fBaBRMTIqS8NuC3zcterlvT0872R29nMS&_nc_ohc=ZfUvXIuY2m4Q7kNvwELOs6r&_nc_oc=AdqhYAuNTLJniuMbikaQ4yNhYRFJedggzRwv_oyZ5jtRjP5jMzAbhclkSWzoc3fXnMA&_nc_zt=24&_nc_ht=scontent.fmnl30-1.fna&_nc_gid=Ir1l1tAAInCs67xzZYU2Kw&_nc_ss=7b2a8&oh=00_AQAhNz9_uyiLQN4-5VtkdZ3fVA3Y74QEySEuGEb7fWL5Lg&oe=6A68E4C6",
    bio: "Just someone who likes to create, explore, and keep growing.",
    skills: ["PHP", "Laravel", "HTML", "CSS", "JavaScript", "MariaDB"],
    isOnline: true,
    lastUpdated: "1 minute ago",
};

function UserProfileCard() {
    const [messageCount, setMessageCount] = useState(0);
    const [isFavorited, setIsFavorited] = useState(false);

    function handleSendMessage() {
        setMessageCount(messageCount + 1);
    }

    function handleReset() {
        setMessageCount(0);
    }

    function handleToggleFavorite() {
        setIsFavorited(!isFavorited);
    }

    return (
        <>
            <div className="profile-card">
                <img src={userData.avatarUrl} />

                <h2>{userData.name}</h2>

                <label htmlFor="bio">Bio</label>
                <p id="bio">{userData.bio}</p>

                <h3>Skills</h3>
                <ul>
                    {userData.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>

                <div style={{ color: "blue", fontWeight: "bold" }}>
                    Messages sent: {messageCount}
                </div>

                {userData.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}

                <button onClick={handleSendMessage}>Send Message</button>
                <button onClick={handleReset}>Reset</button>

                {userData.isOnline && (
                    <button onClick={handleToggleFavorite}>
                        {isFavorited ? "★ Favorited" : "☆ Favorite"}
                    </button>
                )}
            </div>
            <p className="footer">Card last updated: {userData.lastUpdated}</p>
        </>
    );
}

export default UserProfileCard;
