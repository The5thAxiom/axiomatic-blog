export type BlogPostData = {
    title: string;
    id: string;
    description: string;
    datePosted: Date;
    dateEdited: Date;
    content: JSX.Element;
};

export const posts: BlogPostData[] = [
    {
        title: "I Attended My First CTF Event and Here's What I Learned",
        id: 'cyber-defenders-ctf',
        description: 'something somehting',
        datePosted: new Date(2022, 4, 22),
        dateEdited: new Date(2022, 4, 22),
        content: (
            <>
                So my team won, yayyy!!!! there were five of us ofc, but still,
                it was our first experience with anything like this.
            </>
        ),
    },
    // {
    //     title: 'How My Calendar Runs My Life',
    //     id: 'calendar-guide',
    //     description: 'A guide to how I use Google Calendar',
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
    //     description: '',
    //     datePosted: new Date(),
    //     dateEdited: new Date(),
    //     content: <></>,
    // },
];
