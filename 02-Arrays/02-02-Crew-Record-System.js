const crewList = [
    {
        Master: {
            name: "Michael Anderson",
            nationality: "United Kingdom",
            signOnDate: "2026-01-15",
            signOffDate: "2026-07-15",
            passportExpiry: "2030-05-20",
            cdcExpiry: "2029-11-10"
        }
    },

    {
        ChiefOfficer: {
            name: "Ahmed Hassan",
            nationality: "Egypt",
            signOnDate: "2026-02-01",
            signOffDate: "2026-08-01",
            passportExpiry: "2031-03-12",
            cdcExpiry: "2029-09-18"
        }
    },

    {
        SecondOfficer: {
            name: "Daniel Mensah",
            nationality: "Ghana",
            signOnDate: "2026-02-10",
            signOffDate: "2026-08-10",
            passportExpiry: "2032-06-15",
            cdcExpiry: "2030-04-22"
        }
    },

    {
        ThirdOfficer: {
            name: "Carlos Rodriguez",
            nationality: "Spain",
            signOnDate: "2026-03-01",
            signOffDate: "2026-09-01",
            passportExpiry: "2030-12-01",
            cdcExpiry: "2029-07-30"
        }
    },

    {
        ChiefEngineer: {
            name: "Robert Williams",
            nationality: "United States",
            signOnDate: "2026-01-20",
            signOffDate: "2026-07-20",
            passportExpiry: "2031-08-14",
            cdcExpiry: "2030-02-25"
        }
    },

    {
        SecondEngineer: {
            name: "Kwame Boateng",
            nationality: "Ghana",
            signOnDate: "2026-02-05",
            signOffDate: "2026-08-05",
            passportExpiry: "2032-01-18",
            cdcExpiry: "2029-12-05"
        }
    },

    {
        ThirdEngineer: {
            name: "Ivan Petrov",
            nationality: "Russia",
            signOnDate: "2026-03-10",
            signOffDate: "2026-09-10",
            passportExpiry: "2031-04-30",
            cdcExpiry: "2030-06-11"
        }
    },

    {
        FourthEngineer: {
            name: "Mohammed Ali",
            nationality: "Pakistan",
            signOnDate: "2026-03-15",
            signOffDate: "2026-09-15",
            passportExpiry: "2030-09-25",
            cdcExpiry: "2029-10-19"
        }
    },

    {
        Bosun: {
            name: "John Smith",
            nationality: "Philippines",
            signOnDate: "2026-02-15",
            signOffDate: "2026-08-15",
            passportExpiry: "2033-02-20",
            cdcExpiry: "2030-08-01"
        }
    },

    {
        AbleSeaman: {
            name: "Jose Santos",
            nationality: "Philippines",
            signOnDate: "2026-02-15",
            signOffDate: "2026-08-15",
            passportExpiry: "2032-11-15",
            cdcExpiry: "2030-03-14"
        }
    },

    {
        Oiler: {
            name: "Luis Fernandez",
            nationality: "Spain",
            signOnDate: "2026-02-20",
            signOffDate: "2026-08-20",
            passportExpiry: "2032-03-10",
            cdcExpiry: "2029-08-15"
        }
    },

    {
        ChiefCook: {
            name: "Patrick Osei",
            nationality: "Ghana",
            signOnDate: "2026-01-25",
            signOffDate: "2026-07-25",
            passportExpiry: "2033-01-22",
            cdcExpiry: "2030-09-13"
        }
    },

    {
        Messman: {
            name: "Samuel Johnson",
            nationality: "Nigeria",
            signOnDate: "2026-01-25",
            signOffDate: "2026-07-25",
            passportExpiry: "2032-04-18",
            cdcExpiry: "2029-12-20"
        }
    }
];




let newSecondEngineer = {
    name: "Kwame Boateng",
    nationality: "Ghana",
    signOnDate: "2026-03-05",
    signOffDate: "2026-09-05",
    passportExpiry: "2033-01-18",
    cdcExpiry: "2030-12-05"
};

const crewListCopy = [...crewList];

console.log(crewList.length);

crewListCopy[3].secondEngineerTwo = newSecondEngineer;
delete crewListCopy[3].ThirdOfficer;


console.log(crewListCopy)