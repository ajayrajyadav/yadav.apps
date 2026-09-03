export const site = {
  title: "Ajay Yadav Apps",
  description:
    "Public marketing, privacy, and support pages for Ajay Yadav's iPhone apps.",
};

export const apps = [
  {
    slug: "nudgy",
    name: "Nudgy",
    theme: "nudgy",
    status: "Available now",
    indexEyebrow: "ADHD-friendly task app",
    accent: "blue",
    shortDescription:
      "A calm iPhone task app built around one clear Next Move, quick capture, gentle streaks, and Minimum Win goals.",
    heroTitle: "One clear next move. Less noise.",
    heroDescription:
      "Nudgy helps you capture a task quickly, focus on one useful step, and keep momentum with gentle streaks, Minimum Win goals, optional scheduling, recurring tasks, awards, and low-pressure progress.",
    heroPoints: [
      "Quick capture without a heavy setup flow",
      "A Today-first view centered on one useful Next Move",
      "Optional scheduling, recurring tasks, reminders, and awards",
    ],
    supportEmail: "ajayraj98@gmail.com",
    privacyUpdated: "September 3, 2026",
    rootShot: {
      src: "assets/screenshots/nudgy/today.png",
      alt: "Nudgy Today screen showing Next Move, Minimum Win progress, and quick task capture.",
    },
    heroShot: {
      src: "assets/screenshots/nudgy/today.png",
      alt: "Nudgy Today screen showing progress, a Next Move card, and Quick Add.",
      caption:
        "The Today view keeps one task in focus while progress, quick capture, and the day's structure stay readable.",
    },
    featureCards: [
      {
        badge: "Quick Add",
        badgeClass: "badge-blue",
        title: "Capture first, decide details second",
        body:
          "Add the task immediately, then expand scheduling and repeat settings only when you need them.",
      },
      {
        badge: "Minimum Win",
        badgeClass: "badge-green",
        title: "Count one useful action",
        body:
          "A small daily goal still counts. The product is built for consistency without punishing missed perfection.",
      },
      {
        badge: "Awards",
        badgeClass: "badge-gold",
        title: "Make progress feel visible",
        body:
          "Awards and Next Win progress give completion feedback without turning the app into a noisy game.",
      },
    ],
    gallery: [
      {
        src: "assets/screenshots/nudgy/today.png",
        alt: "Nudgy Today screen with Next Move, Minimum Win progress, and quick add.",
        caption: "Today and Next Move",
      },
      {
        src: "assets/screenshots/nudgy/quick-add.png",
        alt: "Nudgy Quick Add screen with scheduling and repeat options expanded.",
        caption: "Quick Add with optional details",
      },
      {
        src: "assets/screenshots/nudgy/upcoming.png",
        alt: "Nudgy Upcoming screen showing scheduled tasks and recurring routines.",
        caption: "Upcoming tasks and recurring routines",
      },
      {
        src: "assets/screenshots/nudgy/awards.png",
        alt: "Nudgy Awards screen showing next win progress and unlocked awards.",
        caption: "Awards and Next Win progress",
      },
      {
        src: "assets/screenshots/nudgy/award-unlock.png",
        alt: "Nudgy award unlock overlay appearing after a completion milestone.",
        caption: "Award unlock feedback",
      },
      {
        src: "assets/screenshots/nudgy/completed-undo.png",
        alt: "Nudgy Completed screen showing recent completions and an undo option.",
        caption: "Completed history with undo",
      },
    ],
    detailCards: [
      {
        title: "One clear Next Move",
        body:
          "Nudgy recommends one task to do now so you do not have to reprioritize an entire list before starting.",
      },
      {
        title: "Gentle streaks",
        body:
          "Recovery is part of the design. Missed days do not erase the point of using the app.",
      },
      {
        title: "Private by default",
        body:
          "The current app behavior in this repo is local-first, without account creation or cloud-first complexity.",
      },
    ],
    privacySections: [
      {
        title: "What Nudgy does",
        body:
          "Nudgy is an ADHD-friendly iPhone task app focused on quick capture, one clear Next Move, gentle streaks, Minimum Win goals, optional scheduling, recurring tasks, awards, and focus sessions.",
      },
      {
        title: "Information stored on your device",
        list: [
          "Task titles and optional notes you create",
          "Scheduling details, categories, and repeat rules",
          "Completion history used for streaks, awards, and completed-task views",
          "Focus session logs and goal settings",
          "Reminder preferences such as time and enabled state",
        ],
      },
      {
        title: "Accounts and cloud sync",
        body:
          "Nudgy does not currently require an account for core functionality, and the current app does not include everyday cloud sync.",
      },
      {
        title: "Analytics and tracking",
        body:
          "Based on the current repository, Nudgy does not currently ship analytics collection in the app, and the app is not designed around advertising or tracking.",
      },
      {
        title: "Notifications and reminders",
        body:
          "If you enable reminders, Nudgy can schedule local notifications on your device. Reminder delivery depends on the notification permissions you grant in iOS.",
      },
      {
        title: "Deletion",
        body:
          "Because core data is stored locally, deleting the app may remove locally stored Nudgy data from your device, subject to iOS backup and restore behavior.",
      },
      {
        title: "Policy updates",
        body:
          "If future releases add remote sync, analytics, or account features, this policy should be updated before those changes are released.",
      },
    ],
    privacyContact:
      'Privacy questions can be sent to <a href="mailto:ajayraj98@gmail.com">ajayraj98@gmail.com</a>.',
    supportSections: [
      {
        title: "Support email",
        body:
          'Use <a href="mailto:ajayraj98@gmail.com">ajayraj98@gmail.com</a>. Include your iPhone model, iOS version, app version, and a short description of what happened.',
      },
      {
        title: "What to include",
        body:
          "Helpful reports mention the screen you were on, whether reminders were enabled, and whether the issue involved Today, Upcoming, Completed, awards, or focus sessions.",
      },
      {
        title: "Common checks",
        body:
          "If reminders are not showing, confirm that iOS notification permission is enabled for Nudgy. If a task seems missing, check Today, Upcoming, and Completed before assuming data loss.",
      },
      {
        title: "Accessibility feedback",
        body:
          "If Dynamic Type, VoiceOver, contrast, or motion behavior is not working as expected, report that through the same support email.",
      },
    ],
  },
  {
    slug: "layout-studio",
    name: "Layout Studio",
    theme: "layout-studio",
    status: "In active development",
    indexEyebrow: "Touch-first collage editor",
    accent: "rose",
    shortDescription:
      "An iPhone collage editor for split layouts, direct frame editing, reusable imported photos, and quick export to Photos.",
    heroTitle: "Build split-photo layouts without fighting the interface.",
    heroDescription:
      "Layout Studio is a touch-first iPhone collage editor focused on choosing a canvas, splitting frames quickly, placing photos directly, and exporting clean layouts without a heavy desktop-style workflow.",
    heroPoints: [
      "Choose a canvas ratio and orientation up front",
      "Split and unsplit frames with direct controls",
      "Reuse imported photos from a persistent photo bank",
    ],
    supportEmail: null,
    privacyUpdated: "September 3, 2026",
    rootShot: {
      src: "assets/screenshots/layout-studio/setup.png",
      alt: "Layout Studio setup screen for choosing canvas size and orientation.",
    },
    heroShot: {
      src: "assets/screenshots/layout-studio/editor.png",
      alt: "Layout Studio editor showing a landscape collage with one filled frame and a visible photo bank.",
      caption:
        "The editor keeps frame selection, quick imports, export actions, and the photo bank in a single touch-first workspace.",
    },
    featureCards: [
      {
        badge: "Canvas",
        badgeClass: "badge-blue",
        title: "Start with the right format",
        body:
          "Choose the aspect ratio and orientation before editing so the canvas already matches where the collage will be used.",
      },
      {
        badge: "Editing",
        badgeClass: "badge-rose",
        title: "Edit by frame, not by guesswork",
        body:
          "Tap a frame, import a photo, then refine composition with direct gestures and split controls.",
      },
      {
        badge: "Export",
        badgeClass: "badge-green",
        title: "Move from layout to save quickly",
        body:
          "The current app flow is built around fast iteration, then export back to Photos when the layout is ready.",
      },
    ],
    gallery: [
      {
        src: "assets/screenshots/layout-studio/setup.png",
        alt: "Layout Studio start screen with size and orientation controls.",
        caption: "Canvas setup",
      },
      {
        src: "assets/screenshots/layout-studio/editor.png",
        alt: "Layout Studio editor with photo bank and split layout.",
        caption: "Editor with photo bank",
      },
      {
        src: "assets/screenshots/layout-studio/split-menu.png",
        alt: "Layout Studio split menu showing split right, split down, and unsplit options.",
        caption: "Direct split controls",
      },
    ],
    detailCards: [
      {
        title: "Fast layout flow",
        body:
          "The current repo points to a simple sequence: choose a canvas, split frames, import photos, then save or share.",
      },
      {
        title: "Local editing",
        body:
          "Current docs and code indicate a local iPhone editing experience rather than an account-based service.",
      },
      {
        title: "Public pages ready for launch",
        body:
          "This section includes dedicated marketing, privacy, and support URLs so the app can be given stable public references later.",
      },
    ],
    privacySections: [
      {
        title: "What Layout Studio does",
        body:
          "Layout Studio is an iPhone collage editor. The current app behavior in the repo centers on local photo import, frame-based layout editing, and export back to Photos.",
      },
      {
        title: "Photos access",
        body:
          "The current app can request access to photos that you choose to import, and it can request permission to save exported collages back to Photos.",
      },
      {
        title: "Accounts, analytics, and tracking",
        body:
          "The current codebase and privacy audit indicate no account creation, no tracking prompt, and no obvious analytics collection in the shipped app flow.",
      },
      {
        title: "How your content is used",
        body:
          "Selected images are used only to provide editing, preview, and export features inside the app. If future versions add cloud sync or remote services, this page should be updated before release.",
      },
      {
        title: "This website",
        body:
          "This site is static and does not include user accounts, comments, or backend-driven dashboards.",
      },
    ],
    privacyContact:
      "A public privacy contact for Layout Studio is not yet configured in the inspected repos. Add a monitored support address before App Store submission.",
    supportSections: [
      {
        title: "Support contact pending",
        body:
          "A Layout Studio support email is not clearly configured in the inspected public-facing files. Add a monitored address here before using this page in App Store Connect.",
      },
      {
        title: "What reports should include",
        body:
          "Ask users to include device model, iOS version, what canvas size they chose, whether the issue involved import, split controls, or export, and clear reproduction steps.",
      },
      {
        title: "Basic troubleshooting",
        body:
          "If imports fail, confirm photo access in iPhone Settings. If export fails, retry with fewer source images and confirm Photos save permission is allowed.",
      },
    ],
  },
];
