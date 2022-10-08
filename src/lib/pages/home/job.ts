export class Job {
    id: number;
    title: string;
    company: string;
    location: string;
    startTime: string;
    endTime: string;
    description: Array<string>;
    technology: Array<Technology>;

    constructor(
        id: number,
        title: string,
        company: string,
        location: string,
        startTime: string,
        endTime: string | null,
        description: Array<string>,
        technology: Array<Technology>
    ) {
        this.id = id;
        this.title = title;
        this.company = company;
        this.location = location;
        this.startTime = startTime;
        this.endTime = endTime == null ? "Present" : endTime;
        this.description = description;
        this.technology = technology;
    }
}

class Technology {
    name: string;
    icon: string;

    constructor(
        name: string,
        icon: string
    ) {
        this.name = name;
        this.icon = icon;
    }
}

export class Technologies {
    private static instance: Technologies;

    android = new Technology("Android", "devicon-android-plain colored");
    kotlin = new Technology("Kotlin", "devicon-kotlin-plain colored");
    gradle = new Technology("Gradle", "devicon-gradle-plain colored");
    firebase = new Technology("Firebase", "devicon-firebase-plain colored");
    google = new Technology("Google", "devicon-google-plain colored");
    angular = new Technology("Angular", "devicon-angularjs-plain colored");
    typescript = new Technology("TypeScript", "devicon-typescript-plain colored");
    javascript = new Technology("JavaScript", "devicon-javascript-plain colored");
    jasmine = new Technology("Jasmine", "devicon-jasmine-plain colored");
    sass = new Technology("sass", "devicon-sass-plain colored");
    html5 = new Technology("HTML 5", "devicon-html5-plain colored");
    bootstrap = new Technology("Bootstrap", "devicon-bootstrap-plain colored");
    nodejs = new Technology("Node.js", "devicon-nodejs.plain colored");
    github = new Technology("GitHub", "devicon-github-plain colored");
    figma = new Technology("Figma", "devicon-figma-plain colored");
    csharp = new Technology("C#", "devicon-csharp-plain colored");
    cplusplus = new Technology("C++", "devicon-cplusplus-plain colored");
    gitlab = new Technology("GitLab", "devicon-gitlab-plain colored");
    dotnet = new Technology(".NET", "devicon-dot-net-plain colored");
    windows = new Technology("Windows", "devicon-windows8-plain colored");

    public static getInstance(): Technologies {
        if (!Technologies.instance) {
            Technologies.instance = new Technologies();
        }

        return Technologies.instance;
    }
}

export class Career {
    jobs: Array<Job>

    constructor() {
        let technologies = Technologies.getInstance();
        this.jobs = Array(
            new Job(
                0,
                "Software Engineer",
                "Rocket Homes",
                "Detroit, MI",
                "August 2019",
                null,
                Array(
                    "Working on Rocket Homes Android app utilizing Kotlin, Android Jetpack components. " +
                    "Integrated Google Play In-App Update and Reviews APIs into app. " +
                    "Converted dependency injection for app from Dagger to Hilt. " +
                    "Leading efforts adopting Jetpack Compose into app. "+
                    "Conducting code reviews.",
                    "Worked on Rocket HQ web application utilizing Angular. Added library to enable gestures on the web! " +
                    "Wrote unit tests in Jasmine for various components, services, pipes, and directives for application.",
                    "Extracted portion of the Rocket HQ web app to expose through an npm module for other team members to use. " +
                    "Provided a component and service, and testing stubs through a module to publish on a JFrog Artifactory npm repository. " + 
                    "Made repository containing the code open for others to contribute to.",
                    "Developed an internal Android app with Kotlin implementing the single activity multi fragment architecture using Android Jetpack " +
                    "components (Navigation, ViewModels, DataBinding, CameraX, etc.) to create a system for checking out mobile devices for our team. " +
                    "Created backend with Firebase using Cloud Firestore, Cloud Functions, and Authentication for storing data for the app. " +
                    "Created unit tests using Mockito.",
                    "Revamped CI strategy with custom JavaScript GitHub Action to keep multiple branches in sync. " +
                    "Maintained clean repo, and streamlined processes using GitHub Actions."
                ),
                Array(
                    technologies.android,
                    technologies.kotlin,
                    technologies.gradle,
                    technologies.firebase,
                    technologies.google,
                    technologies.angular,
                    technologies.typescript,
                    technologies.jasmine,
                    technologies.sass,
                    technologies.html5,
                    technologies.bootstrap,
                    technologies.nodejs,
                    technologies.github,
                    technologies.figma
                )
            ),
            new Job(
                1,
                "Software Engineer",
                "Daifuku",
                "Novi, MI",
                "May 2016",
                "August 2019",
                Array(
                    "Built web applications utilizing Angular, TypeScript, C# .NET Core, and MSSQL to create progressive web apps (PWA). " +
                    "Led Angular front-end development. Built C# .NET Core backend. By developing PWAs for these products, these allowed " +
                    "the apps to perform better on a variety of different devices. Build times were improved, and the apps were able to make " +
                    "use of service workers which allows the apps to be stored on devices for offline use and prompted users to install the " +
                    "apps locally if they liked. Service workers also allowed the Push API to be used so push notifications can be received on " + 
                    "all devices connected to the server.",
                    "Created C# WPF Applications to be used for setup of systems utilizing the PWAs. These apps allowed users to configure " +
                    "additional features for the web apps without creating errors in the raw JSON files. This allowed systems to be setup " +
                    "with more ease and automation, and reduced the amount of time technicans spend setting up systems.",
                    "Developed an Electron app to be used standalone by internal system engineers to save them time deploying systems on site. " +
                    "This app wraps a portion of one the Angular apps through Electron to be used as a cross-platform desktop app. The app exports " +
                    "a JSON file which can then be imported into the corresponding Angular app.",
                    "Assisted in managing local GitLab server. Trained engineers on how to use Git for version control. Assisted engineers with " +
                    "questions on using Git, and specifics with using GitLab."
                ),
                Array(
                    technologies.angular,
                    technologies.typescript,
                    technologies.nodejs,
                    technologies.csharp,
                    technologies.cplusplus,
                    technologies.sass,
                    technologies.html5,
                    technologies.bootstrap,
                    technologies.gitlab
                )
            ),
            new Job(
                2,
                "Resident Advisor",
                "Eastern Michigan University",
                "Ypsilanti, MI",
                "August 2014",
                "April 2016",
                Array(
                    "Organized/maintained a friendly community in Brown/Munson Apartments.\n" + 
                    "Assisted residents in various situations.\n" + 
                    "Planned/Implemented various educational programs.\n" + 
                    "Demonstrated leadership throughout hall.",
                    "Wrote a Google Apps Script Web Application that utilizes Google Forms, " + 
                    "Google Sheets, Google Calendar, and Gmail to organize and assign move " +
                    "out times for residents throughout the hall."
                ),
                Array(
                    technologies.javascript,
                    technologies.google
                )
            ),
            new Job(
                3,
                "Software Engineering Intern",
                "KLA Laboraties, Inc.",
                "Dearborn, MI",
                "July 2015",
                "August 2015",
                Array(
                    "Developed a Visual C# Windows Form Application implementing Microsoft Office " +
                    "libraries to output a spreadsheet used to complete networking surveys."
                ),
                Array(
                    technologies.csharp,
                    technologies.dotnet,
                    technologies.windows
                )
            )
        );
    }
}