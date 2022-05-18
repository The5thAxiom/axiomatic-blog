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
        datePosted: new Date('2022-04-23'),
        dateEdited: new Date('2022-04-23'),
        content: (
            <>
                <p>
                    So, guess what, my team won!!! I mean there were five of us,
                    but still, it was our first experience with a CTF (and even
                    cyber-security in general for some of us) and we are all
                    very proud!
                </p>
                <p>
                    You might be asking, 'What exactly is a CTF?'. Well, CTF
                    stands for 'Capture the Flag'. It is an event where
                    participants need to use their technical skills find secret
                    messages (or 'flags') hidden in a file, a website, a binary
                    file, or in any digital object/system. And guess what?, it
                    is as fun as it sounds.
                </p>
                <p>
                    Now, onto this particular event. 'Cyber Defenders' was a CTF
                    organised by Cyscom, VIT Chennai's Branch of OWASP. The
                    event was split into 2 days. The first day was supposed to
                    be an introductory session with the second being the actual
                    competition. They had a great team, the members were
                    knowledgable, the food was gread (fried rice on the first
                    day, biriyani on the second) and the event itself was
                    amazing.
                </p>
                <p>
                    Things, however didn't go as planned (porque así es la vida)
                    and the first day was marred with technical issues. But the
                    second day, now that was a treat! It started with the Cyscom
                    team demonstrating some common techniques used in CTFs and
                    penetration testing. These included, OSINT (Open-Source
                    INTelligence) challenges, cryptography, steganography,
                    web-based attacks, and more. They presented us with
                    problems, gave us some time to solve them and then explained
                    how they would solve the problem themselves. And believe me,
                    as soon as they gave the first cryptography challenge, I was
                    hooked!
                </p>
                <p>
                    They had given us a file, which had a piece of code in the
                    esoteric programming language, Brainfuck (which I recognised
                    in an instant!). That was the moment I knew this was going
                    to be a blast. I got the same rush of finding the answer, of
                    solving a problem which made me fall in love with science
                    and then with computer science.
                </p>
                <p>
                    Now, we get to the actual CTF. My team, 'CID Squad' (I know,
                    its a great name)
                </p>
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
