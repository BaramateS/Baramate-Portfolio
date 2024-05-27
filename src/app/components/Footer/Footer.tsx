const footer_style: React.CSSProperties = {
    background: '#000000',
    opacity: 0.8,
    padding: '25px 9vw',
    fontWeight: '100'
}

export default function Footer() {
    return (
        <div className="w-full text-[#FFFFFF] mt-24" style={footer_style}>
            <h1 className="text-[24px]"><b>Contact Me</b></h1>
            <br />
            <p>53/394 No.2 Sema Fa Khram Road</p>
            <p>Khu Khot, Lam Luk Ka, Pathum Thani 12130</p>
            <p>Email: baramate.saijanyoon@gmail.com</p>
            <p>Tel: 094-497-8922</p>
        </div>
    )
}