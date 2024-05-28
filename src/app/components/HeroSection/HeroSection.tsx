// 'use client';

import Image from 'next/image';
import { useTypewriter } from 'react-simple-typewriter';
import { Grid, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const profile_picture_style: React.CSSProperties = {
    width: '350px',
    borderRadius: '25px',
    border: '10px solid #F9934D'
}

const hero_banner_margin: React.CSSProperties = {
    marginTop: 'auto',
    marginBottom: 'auto'
}

const hero_banner_left_style: React.CSSProperties = {
    margin: 'auto',
    paddingLeft: '100px'
}

const banner_text_section: React.CSSProperties = {
    width: '40vw',
    margin: 'auto'
}

const HeroSection: React.FC = () => {

    const textList: string[] = ['Baramate', 'Frontend Developer'];
    const [dynamicText] = useTypewriter({
        words: textList,
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 40,
    });

    const content: { introduce_text: string, image_hero_section: string } = {
        introduce_text: 'I am an undergraduate, and I hope to make the web application or software play the most effective, easy to develop and edit, and can be applied to the projects needed by the company.',
        image_hero_section: '/image/profile_pic.jpg'
    }

    return (
        <section className="h-screen flex bg-white text-black">
            <Grid container spacing={3} sx={hero_banner_margin}>
                <Grid item xl={7} lg={7} md={7} sm={12} xs={12} sx={hero_banner_left_style}>
                    <div style={banner_text_section}>
                        <h1 className="text-[54px]"><b>I am <span id='dynamic-text' className='text-orange-500 after:bg-orange-500 after:w-[3px] after:h-[54px] after:absolute after:m-3'>{dynamicText}</span></b></h1>
                        <p>{content.introduce_text}</p>
                    <Button variant='contained' size='large' className='mt-9 bg-orange-500 text-white hover:bg-white hover:text-orange-500' href='https://github.com/BaramateS' target='_blank' >View My GitHub Profile&emsp;<OpenInNewIcon/></Button>
                    </div>
                </Grid>
                <Grid item xl={5} lg={5} md={5} sm={12} xs={12} >
                    <div className='flex items-center justify-center'>
                    <Image src={content.image_hero_section} alt="Profile Picture" width={1000} height={1000} style={profile_picture_style} />
                    </div>
                </Grid>
            </Grid>
        </section>
    )
}

export default HeroSection;