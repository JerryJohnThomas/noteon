const fetchNotes = async () => {
    // Simulate an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    title: "Note 1",
                    body: "This is the body of Note 1.",
                    date: "2024-09-15",
                    createdBy: "User1",
                    createdDate: "2024-09-01",
                    updatedBy: "User2",
                    updatedDate: "2024-09-10",
                },
                {
                    title: "Dream On",
                    body: `Every morning in Africa, a gazelle wakes up, it knows it must outrun the fastest lion or it will be killed. Every morning in Africa, a lion wakes up. It knows it must run faster than the slowest gazelle, or it will starve. It doesn't matter whether you're the lion or a gazelle-when the sun comes up, you'd better be running
                            Every morning in Africa, a gazelle wakes up, it knows it must outrun the fastest lion or it will be killed. Every morning in Africa, a lion wakes up. It knows it must run faster than the slowest gazelle, or it will starve. It doesn't matter whether you're the lion or a gazelle-when the sun comes up, you'd better be running`,
                    date: "2024-09-14",
                    createdBy: "User2",
                    createdDate: "2024-09-02",
                    updatedBy: "User1",
                    updatedDate: "2024-09-12",
                },
                // Add more notes as needed
            ]);
        }, 1000); // Simulate network delay
    });
};

export default fetchNotes;
