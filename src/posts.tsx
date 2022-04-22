export type BlogPostData = {
    title: string;
    id: string;
    blurb?: string;
    datePosted: Date;
    dateEdited: Date;
    content: JSX.Element;
};

export const posts: BlogPostData[] = [
    {
        title: "I Attended My First CTF and Here's What I Learned",
        id: 'cyber-defenders-ctf',
        // blurb: '',
        datePosted: new Date('2022-04-22'),
        dateEdited: new Date('2022-04-23'),
        content: (
            <>
                So, guess what, my team won!!! I mean there were five of us, but
                still, it was our first experience with a CTF (and even
                cyber-security in general for some of us) and we are all very
                proud!
                <br />
                You might be asking, 'What exactly is a CTF?'. Well, CTF stands
                for 'Capture the Flag'. It is an event where participants need
                to use their technical skills find secret messages (or 'flags')
                hidden in a file, a website, a binary file, or in any digital
                object/system. And guess what?, it is as fun as it sounds.
                <br />
                Now, onto this particular event. 'Cyber Defenders' was a CTF
                organised by Cyscom, VIT Chennai's Branch of OWASP. The event
                was split into 2 days. The first day was supposed to be an
                introductory session with the second being the actual
                competition. Things, however didn't go as planned (porque así es
                la vida) and the first day was marred with technical issues.
            </>
        ),
    },
    // {
    //     title: 'How My Calendar Runs My Life',
    //     id: 'calendar-guide',
    //     blurb: 'A guide to how I use Google Calendar',
    //     datePosted: new Date(),
    //     dateEdited: new Date(),
    //     content: (
    //         <>
    //             Just put everything on your calendar. end of story. look at it
    //             everyday for everything
    //         </>
    //     ),
    // },
    // {
    //     title: '',
    //     id: '',
    //     blurb: '',
    //     datePosted: new Date(),
    //     dateEdited: new Date(),
    //     content: <></>,
    // },
];
