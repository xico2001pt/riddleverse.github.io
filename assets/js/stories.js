export const STORIES_DATA = [
    {
        story: 'christmas2024',
        title: 'The Lost Artifacts of Christmas',
        total_levels: 24,
        solutions: [
            "Fire",
        ]
    },
    {
        story: 'christmas2025',
        title: 'Christmas 2025',
        total_levels: 24,
    }
];

export function getStoryData(story) {
    for (let i = 0; i < STORIES_DATA.length; ++i) {
        if (STORIES_DATA[i].story === story)
            return STORIES_DATA[i];
    }
    return null;
}
