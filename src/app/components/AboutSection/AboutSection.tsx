
import Image from "next/image";
import { Grid, Paper, Button } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const section_margin: React.CSSProperties = {
    margin: '0 100px 0 100px'
}

const AboutSection: React.FC = () => {
    return (
        <section style={section_margin}>
            <h3 className="text-[36px]"><b>SKILL</b></h3>
            <Grid container spacing={3} fontSize={'20px'} marginTop={'10px'}>
                <Grid item xl={2} lg={2} md={4} sm={4} xs={12} textAlign={"center"}>
                    <Paper elevation={5} sx={{ padding: '25px' }}>
                        <Image src={'/image/React.webp'} alt="img" width={512} height={512} />
                        {/* <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" /> */}
                        <br />
                        <p><b>React JS/TS</b></p>
                    </Paper>
                </Grid>
                <Grid item xl={2} lg={2} md={4} sm={4} xs={12} textAlign={"center"}>
                    <Paper elevation={5} sx={{ padding: '25px' }}>
                        <Image src={'/image/next_logo.png'} alt="img" width={512} height={512} />
                        {/* <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" alt="" /> */}
                        <br />
                        <p><b>NextJS</b></p>
                    </Paper>
                </Grid>
                <Grid item xl={2} lg={2} md={4} sm={4} xs={12} textAlign={"center"}>
                    <Paper elevation={5} sx={{ padding: '25px' }}>
                        <Image src={'/image/HTML_icon.webp'} alt="img" width={512} height={512} />
                        {/* <img src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png" alt="" /> */}
                        <br />
                        <p><b>HTML</b></p>
                    </Paper>
                </Grid>
                <Grid item xl={2} lg={2} md={4} sm={4} xs={12} textAlign={"center"}>
                    <Paper elevation={5} sx={{ padding: '25px' }}>
                        <Image src={'/image/CSS_icon.webp'} alt="img" width={512} height={512} />
                        {/* <img src="https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png?f=webp" alt="" /> */}
                        <br />
                        <p><b>CSS</b></p>
                    </Paper>
                </Grid>
                <Grid item xl={2} lg={2} md={4} sm={4} xs={12} textAlign={"center"}>
                    <Paper elevation={5} sx={{ padding: '25px' }}>
                        <Image src={'/image/javascript-icon.png'} alt="img" width={512} height={512} />
                        {/* <img src="https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png" alt="" /> */}
                        <br />
                        <p><b>JavaScript</b></p>
                    </Paper>
                </Grid>
                <Grid item xl={2} lg={2} md={4} sm={4} xs={12} textAlign={"center"}>
                    <Paper elevation={5} sx={{ padding: '25px' }}>
                        <Image src={'/image/typescript-icon.png'} alt="img" width={512} height={512} />
                        {/* <img src="https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png" alt="" /> */}
                        <br />
                        <p><b>TypeScript</b></p>
                    </Paper>
                </Grid>
            </Grid>
            <br />
            <br />
            <h3 className="text-[36px]"><b>Education</b></h3>
            <Grid container spacing={3} fontSize={'20px'} marginTop={'10px'}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Paper elevation={5} sx={{ padding: '25px' }}>
                        <Grid container alignContent={"center"} alignItems={"center"}>
                            <Grid item xl={4} lg={4}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Image src={'/image/KMITL_LOGO.webp'} alt="img" width={250} height={250} />
                                    {/* <img src="https://cmms.kmitl.ac.th/_next/image?url=%2Fimages%2FMain%20Logo%20KMITL_Thai%20Orange.png&w=1080&q=100" alt="" width={200} /> */}
                                </div>
                            </Grid>
                            <Grid item xl={8} lg={8}>
                                <h3 className="text-[20px]"><b>2020-2024 | King Mongkut's Institute of Technology Ladkrabang</b></h3>
                                <p>Bachelor of Science Program in Information Technology, Multimedia and Game Development</p>
                                <p>GPA: 2.78</p>
                                <Button variant='contained' size='large' className='mt-9 bg-orange-500 text-white hover:bg-white hover:text-orange-500' href='https://drive.google.com/file/d/1HHDwELOeMW76aR5BPeaSEKHVGbBX-qS_/view?usp=sharing' target='_blank' >Unofficial Transcript&emsp;<OpenInNewIcon /></Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </section>
    )
}

export default AboutSection;

