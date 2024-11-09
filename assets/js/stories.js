export const STORIES_DATA = [
    {
        story: 'christmas2024',
        title: 'The Lost Artifacts of Christmas',
        total_levels: 24,
        solutions: [
            // Act 1
            "Fire",
            "SOONSOWESOESOONE",
            "2,3,5,7,11,13,17,19,23,29",
            ["2,2 7,5", "7,5 2,2"],
            "F6S6E4A3G1",
            "DB,I,FA,IW,IS,LS,SF,SW,FB,B,LO,FS",

            // Act 2
            "wheel",
            ["00100", "01100", "10100", "11000"],
            "0154",
            ["20", "twenty"],
            [
                "C,M,Y,MY,CY,CM,CMY", 
                "C,M,Y,YM,CY,CM,CMY", 
                "C,M,Y,MY,YC,CM,CMY", 
                "C,M,Y,MY,CY,MC,CMY", 
                "C,M,Y,YM,YC,CM,CMY", 
                "C,M,Y,YM,CY,MC,CMY",
                "C,M,Y,MY,YC,MC,CMY",
                "C,M,Y,YM,YC,MC,CMY"
            ],
            "JOY",
            "123456",
            "40,45,5,10",

            // Act 3
            "308",
            "12",
            "6,16,7,10,3,14,4,12,2,11,5,9,13,1,15,8",
            "390",
            "42",
            "Forebay",
            "RUN",
            "Crystal Palace",
            "8192",
            ["1,8,9", "1,9,8", "8,9,1", "8,1,9", "9,1,8", "9,8,1"]
        ],
        unlocker_function: (level) => {
            const initialDate = new Date('2024-11-05T18:00:00Z')
            const currentDate = new Date();
            const diffTime = currentDate - initialDate;
            const diffDays = diffTime / (1000 * 3600 * 24); // Convert milliseconds to days
            return diffDays > level;
        }
    },
];

export function getStoryData(story) {
    for (let i = 0; i < STORIES_DATA.length; ++i) {
        if (STORIES_DATA[i].story === story)
            return STORIES_DATA[i];
    }
    return null;
}
