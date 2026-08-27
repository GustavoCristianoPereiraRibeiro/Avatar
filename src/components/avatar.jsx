function Avatar({nome, foto, online}) {
    const corBorda = online ? 'green' : 'gray';

    return (
        <div className="avatar-profile">
            <img
            src={`https://i.pravatar.cc/150?u=${foto}`}
            style={{
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                border: `4px solid ${corBorda}`,
            }}
            />
            <p>{nome}</p>
        </div>
    );
}

export default Avatar;