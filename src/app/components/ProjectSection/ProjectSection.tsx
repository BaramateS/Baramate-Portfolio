'use client';

import Image from "next/image";
import { Grid, Card, CardActionArea, CardMedia, CardContent, Button } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const section_margin: React.CSSProperties = {
    margin: '100px 100px 50px 100px'
}

const ProjectSection: React.FC = () => {
    return (
        <section style={section_margin}>
            <Grid container spacing={4}>
                <Grid item xl={12} lg={12} md={12} sm={12} textAlign={'center'} borderBottom={'2px solid #F97316'}>
                    <h1 className="text-[36px] text-black"><b>Project</b></h1>
                </Grid>
                <Grid item xl={5} lg={5} md={5} sx={{ textAlign: { xl: 'end', lg: 'end', md: 'start', sm: 'start', xs: 'start' } }}>
                    <h3 className="text-[36px] text-black"><b>IT Room Reservation and Record</b></h3>
                </Grid>
                <Grid item xl={7} lg={7} md={7}>
                    <p>IT Room Reservation and Record is a capstone project designed as a web application for room reservations within the Faculty of Information Technology at King Mongkut&apos;s Institute of Technology Ladkrabang. The standout feature of this application is its interactive room map, which allows users to click and view detailed room information and schedules. My responsibilities in this project included developing the reservation system, designing the database, using Prisma for database migration with PostgreSQL, and creating a REST API for the reservation functionalities. Additionally, the web application includes an admin system that manages and modifies user reservations.</p>
                    <Button variant='contained' size='large' className='mt-9 bg-orange-500 text-white hover:bg-white hover:text-orange-500' href='https://github.com/BaramateS/IT_Room_Reservation_and_Record.git' target='_blank' >View Repository...&emsp;<OpenInNewIcon /></Button>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} display={'flex'} justifyContent={'center'}>
                    <Image src={'/image/ITRoomAPP.png'} alt="ProjectPicture" width={1000} height={1000} />
                    {/* <img src="image/ITRoomAPP.png" alt="" width='1000px'/> */}
                </Grid>
            </Grid>
            <div style={{borderBottom: '2px solid #F97316', margin: '100px 0 0 0'}} />
            <Grid container spacing={4} marginTop={'50px'}>
                <Grid item xl={5} lg={5} md={5} sx={{ textAlign: { xl: 'end', lg: 'end', md: 'start', sm: 'start', xs: 'start' } }}>
                    <h3 className="text-[36px] text-black"><b>Cat Manga Web Cloning</b></h3>
                </Grid>
                <Grid item xl={7} lg={7} md={7}>
                    <p>Cat Manga was a website for reading Japanese manga (currently discontinued). The primary objective of this imitation website was to study web technologies and replicate the original site as closely as possible. My responsibilities in this project included the Discover page, handling JSON files, and displaying content details.</p>
                    <Button disabled variant='contained' size='large' className='mt-9 bg-orange-500 text-white hover:bg-white hover:text-orange-500' href='https://github.com/BaramateS' target='_blank' >View Repository...&emsp;<OpenInNewIcon /></Button>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} display={'flex'} justifyContent={'center'}>
                    <iframe src="https://www.youtube.com/embed/CbfxZpBp84Y" width='1000px' height='500px'></iframe>
                </Grid>
            </Grid>
        </section>
    )
}

export default ProjectSection;