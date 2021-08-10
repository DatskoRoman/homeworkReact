export default function User({id, name, username, email, phone, website}) {
        return(
            <div>
                <h2>{id}.{name} {username}</h2>
                <h3>Email: {email}</h3>
                <h3>Phone:{phone}. Website: {website}</h3>
            </div>
        );
}
