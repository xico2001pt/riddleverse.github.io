export const STORIES_DATA = [
    {
        story: 'christmas2024',
        title: 'The Lost Artifacts of Christmas',
        total_levels: 24,
        solutions: [
            "Fire",
            "SOONSOWESOESOONE",
            "2,3,5,7,11,13,17,19,23,29",
            ["2,2 7,5", "7,5 2,2"],
            "F6S6E4A3G1",
            "DB,I,FA,IW,IS,LS,SF,SW,FB,B,LO,FS",
            "wheel",
        ]
    },
];

export function getStoryData(story) {
    for (let i = 0; i < STORIES_DATA.length; ++i) {
        if (STORIES_DATA[i].story === story)
            return STORIES_DATA[i];
    }
    return null;
}
