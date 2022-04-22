export type BlogPostData = {
    title: string;
    id: string;
    blurb: string;
    datePosted: Date;
    dateEdited: Date;
    content: JSX.Element;
};

export const posts: BlogPostData[] = [
    {
        title: "I Attended My First CTF Event and Here's What I Learned",
        id: 'cyber-defenders-ctf',
        blurb: 'something somehting',
        datePosted: new Date(2022, 3, 21),
        dateEdited: new Date(2022, 3, 21),
        content: (
            <>
                So my team won, yayyy!!!! there were five of us ofc, but still,
                it was our first experience with anything like this.
            </>
        ),
    },
    {
        title: 'How My Calendar Runs My Life',
        id: 'calendar-guide',
        blurb: 'A guide to how I use Google Calendar',
        datePosted: new Date(),
        dateEdited: new Date(),
        content: (
            <>
                Just put everything on your calendar. end of story. look at it
                everyday for everything
            </>
        ),
    },
    // {
    //     title: '',
    //     id: '',
    //     blurb: '',
    //     datePosted: new Date(),
    //     dateEdited: new Date(),
    //     content: <></>,
    // },
];
