// --- FIREBASE CONFIGURATION ---
// IMPORTANT: Please replace this configuration with your actual Firebase Project config.
// Instructions are detailed in the FIREBASE_SETUP.md file.
const firebaseConfig = {
    apiKey: "AIzaSyCsUMLdncvz3wBHCF-RvU7AFDkCcvViGoY",
    authDomain: "placement-tracker-2026.firebaseapp.com",
    projectId: "placement-tracker-2026",
    storageBucket: "placement-tracker-2026.firebasestorage.app",
    messagingSenderId: "1086363281999",
    appId: "1:1086363281999:web:3532fae2e61f58f6a9583a",
    measurementId: "G-L02BPFPKFD"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();
// ------------------------------

const roadmapData = [
    {
        id: "arrays",
        title: "Arrays Core Mastery",
        dateRange: "Mar 17 → Apr 7 (22 days)",
        icon: "ph-squares-four",
        days: [
            { day: 1, title: "Basics + Two Pointer Start", tasks: ["LC 167 – Two Sum II", "LC 125 – Valid Palindrome", "LC 977 – Squares of Sorted Array", "LC 283 – Move Zeroes", "LC 26 – Remove Duplicates"] },
            { day: 2, title: "Arrays & Two Pointers", tasks: ["LC 27 – Remove Element", "LC 80 – Remove Duplicates II", "LC 88 – Merge Sorted Array", "LC 11 – Container With Most Water", "LC 15 – 3Sum"] },
            { day: 3, title: "Advanced Two Pointers", tasks: ["LC 16 – 3Sum Closest", "LC 18 – 4Sum", "LC 881 – Boats to Save People", "LC 259 – 3Sum Smaller", "LC 42 – Trapping Rain Water"] },
            { day: 4, title: "Two Pointers Final", tasks: ["LC 75 – Sort Colors", "LC 1877 – Minimize Max Pair Sum", "LC 844 – Backspace String Compare", "LC 2161 – Partition Array Pivot", "LC 1679 – Max K-Sum Pairs"] },
            { day: 5, title: "REVISION DAY", tasks: ["Re-solve toughest 5 from previous days"] },
            { day: 6, title: "Sliding Window Start", tasks: ["LC 209 – Min Subarray Sum", "LC 643 – Max Average Subarray", "LC 1456 – Max Vowels", "LC 1004 – Max Consecutive Ones", "LC 487 – Max Consecutive Ones II"] },
            { day: 7, title: "Sliding Window Mastery", tasks: ["LC 904 – Fruit Into Baskets", "LC 424 – Longest Repeating Character", "LC 713 – Subarray Product < K", "LC 1343 – Subarray Avg ≥ Threshold", "LC 1052 – Grumpy Bookstore"] },
            { day: 8, title: "Advanced Sliding Window", tasks: ["LC 930 – Binary Subarrays", "LC 1248 – Nice Subarrays", "LC 992 – Subarrays with K Distinct", "LC 239 – Sliding Window Maximum", "LC 76 – Minimum Window Substring"] },
            { day: 9, title: "REVISION", tasks: ["Sliding Window Revision"] },
            { day: 10, title: "Prefix Sum", tasks: ["LC 303 – Range Sum Query", "LC 1480 – Running Sum", "LC 724 – Pivot Index", "LC 560 – Subarray Sum K", "LC 523 – Continuous Subarray"] },
            { day: 11, title: "Prefix Sum & Hash Maps", tasks: ["LC 525 – Contiguous Array", "LC 325 – Max Size Subarray", "LC 238 – Product Except Self", "LC 1588 – Sum Odd Length", "LC 1423 – Max Points Cards"] },
            { day: 12, title: "2D & Advanced Prefix Sum", tasks: ["LC 1109 – Flight Bookings", "LC 1094 – Car Pooling", "LC 1314 – Matrix Block Sum", "LC 304 – Range Sum 2D", "LC 1395 – Count Teams"] },
            { day: 13, title: "REVISION", tasks: ["Prefix Sum Revision"] },
            { day: 14, title: "Kadane's Algorithm", tasks: ["LC 53 – Maximum Subarray", "LC 152 – Max Product Subarray", "LC 918 – Circular Subarray", "LC 978 – Turbulent Subarray", "LC 1749 – Max Absolute Sum"] },
            { day: 15, title: "Greedy & Stock Problems", tasks: ["LC 121 – Buy Sell Stock", "LC 122 – Buy Sell II", "LC 1191 – K Concatenation", "LC 1746 – Max Subarray After Operation", "LC 1793 – Max Score Subarray"] },
            { day: 16, title: "REVISION", tasks: ["Kadane's Revision"] },
            { day: 17, title: "Array Manipulation", tasks: ["LC 189 – Rotate Array", "LC 48 – Rotate Image", "LC 344 – Reverse String", "LC 151 – Reverse Words", "LC 31 – Next Permutation"] },
            { day: 18, title: "Array Rearrangement", tasks: ["LC 2149 – Rearrange by Sign", "LC 1470 – Shuffle Array", "LC 280 – Wiggle Sort", "LC 561 – Array Partition", "LC 73 – Set Matrix Zeroes"] },
            { day: 19, title: "Missing & Duplicates", tasks: ["LC 41 – First Missing Positive", "LC 268 – Missing Number", "LC 287 – Find Duplicate", "LC 442 – Find Duplicates", "LC 169 – Majority Element"] },
            { day: 20, title: "Searching + Tricks", tasks: ["LC 229 – Majority Element II", "LC 136 – Single Number", "LC 137 – Single Number II", "LC 260 – Single Number III", "LC 162 – Peak Element"] },
            { day: 21, title: "More Searching", tasks: ["LC 852 – Peak Index", "LC 274 – H-Index", "LC 215 – Kth Largest Element", "LC 347 – Top K Frequent", "LC 164 – Maximum Gap"] },
            { day: 22, title: "CONSOLIDATION", tasks: ["LC 15 – 3Sum", "LC 42 – Trapping Rain Water", "LC 560 – Subarray Sum K", "LC 239 – Sliding Window Maximum", "LC 53 – Maximum Subarray"] }
        ]
    },
    {
        id: "strings",
        title: "String Roadmap",
        dateRange: "Apr 8 → Apr 22 (15 days)",
        icon: "ph-text-aa",
        days: [
            { day: 1, title: "Basics (Apr 8)", tasks: ["LC 344 – Reverse String", "LC 151 – Reverse Words", "LC 58 – Length of Last Word", "LC 14 – Longest Common Prefix", "LC 125 – Valid Palindrome"] },
            { day: 2, title: "StringBuilder Focus", tasks: ["LC 541 – Reverse String II", "LC 557 – Reverse Words III", "LC 680 – Valid Palindrome II", "LC 415 – Add Strings", "LC 43 – Multiply Strings"] },
            { day: 3, title: "Frequency / Hashing", tasks: ["LC 242 – Valid Anagram", "LC 49 – Group Anagrams", "LC 451 – Sort Characters by Frequency", "LC 387 – First Unique Character", "LC 383 – Ransom Note"] },
            { day: 4, title: "More Hashing", tasks: ["LC 205 – Isomorphic Strings", "LC 290 – Word Pattern", "LC 389 – Find the Difference", "LC 771 – Jewels and Stones", "LC 1002 – Find Common Characters"] },
            { day: 5, title: "REVISION", tasks: ["Re-solve toughest 5 strings problems"] },
            { day: 6, title: "Sliding Window", tasks: ["LC 3 – LSWRC", "LC 159 – LSW2DC", "LC 340 – K Distinct Characters", "LC 424 – Longest Repeating Char Replace", "LC 1456 – Max Vowels"] },
            { day: 7, title: "Sliding Window II", tasks: ["LC 438 – Find All Anagrams", "LC 567 – Permutation in String", "LC 76 – Minimum Window Substring", "LC 187 – Repeated DNA Sequences", "LC 1100 – K Length Substrings"] },
            { day: 8, title: "REVISION", tasks: ["Sliding Window Revision + 2 reattempts"] },
            { day: 9, title: "Palindrome Mastery", tasks: ["LC 5 – Longest Palindromic Substring", "LC 647 – Count Palindromic Substrings", "LC 131 – Palindrome Partitioning", "LC 132 – Palindrome Partitioning II", "LC 516 – Longest Palindromic Subsequence"] },
            { day: 10, title: "More Palindromes", tasks: ["LC 680 – Valid Palindrome II", "LC 234 – Palindrome Linked List", "LC 409 – Longest Palindrome", "LC 214 – Shortest Palindrome", "LC 266 – Palindrome Permutation"] },
            { day: 11, title: "Stack + Parsing", tasks: ["LC 20 – Valid Parentheses", "LC 71 – Simplify Path", "LC 394 – Decode String", "LC 227 – Basic Calculator II", "LC 224 – Basic Calculator"] },
            { day: 12, title: "Advanced Stack", tasks: ["LC 150 – Evaluate RPN", "LC 856 – Score of Parentheses", "LC 32 – Longest Valid Parentheses", "LC 921 – Min Add to Make Valid", "LC 1249 – Remove Invalid Parentheses"] },
            { day: 13, title: "Advanced Strings", tasks: ["LC 28 – Implement strStr()", "LC 459 – Repeated Substring Pattern", "LC 686 – Repeated String Match", "LC 1044 – Longest Duplicate Substring", "LC 1062 – Longest Repeating Substring"] },
            { day: 14, title: "Mixed Practice", tasks: ["LC 76 (redo)", "LC 49 (redo)", "LC 5 (redo)", "LC 3 (redo)", "LC 394 (redo)"] },
            { day: 15, title: "FINAL TEST", tasks: ["Solve without hints:", "LC 76", "LC 5", "LC 49", "LC 424", "LC 32"] }
        ]
    }
];

// App State
let currentFirebaseUser = null;
let userData = null;
let currentSectionId = roadmapData[0].id;
let progressState = {};
let totalTasksCount = 0;

roadmapData.forEach(section => {
    section.days.forEach(day => {
        totalTasksCount += day.tasks.length;
    });
});

// DOM Elements
const authOverlay = document.getElementById('auth-overlay');
const authLoading = document.getElementById('auth-loading');
const loginFormContainer = document.getElementById('login-form-container');
const registerFormContainer = document.getElementById('register-form-container');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegisterBtn = document.getElementById('show-register');
const showLoginBtn = document.getElementById('show-login');
const loginError = document.getElementById('login-error');
const registerError = document.getElementById('register-error');

const sectionNav = document.getElementById('section-nav');
const mainContent = document.getElementById('main-content');
const overallProgressBar = document.getElementById('overall-progress-bar');
const overallProgressText = document.getElementById('overall-progress-text');
const themeToggleBtn = document.getElementById('theme-toggle');
const celebrationModal = document.getElementById('celebration');

const userProfileContainer = document.getElementById('user-profile-container');
const headerUsername = document.getElementById('header-username');
const headerAvatar = document.getElementById('header-avatar');
const logoutBtn = document.getElementById('logout-btn');

const streakContainer = document.getElementById('streak-container');
const streakCount = document.getElementById('streak-count');
const badgesContainer = document.getElementById('badges-container');
const leaderboardBtn = document.getElementById('leaderboard-btn');
const adminBtn = document.getElementById('admin-btn');
const leaderboardModal = document.getElementById('leaderboard-modal');
const adminModal = document.getElementById('admin-modal');

// Init application
function init() {
    setupTheme();
    setupAuthListeners();
    setupModals();

    // Auth Listener
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            currentFirebaseUser = user;
            await loadUserData(user.uid);
            showMainApp();
        } else {
            currentFirebaseUser = null;
            userData = null;
            progressState = {};
            showAuthScreen();
        }
    });
}

// ----------------- Data Loading & Syncing ----------------- //

async function loadUserData(uid) {
    try {
        const docRef = db.collection('users').doc(uid);
        const docSnap = await docRef.get();
        if (docSnap.exists) {
            userData = docSnap.data();
            progressState = userData.progress || {};
            await calculateAndUpdateStreak(uid, userData);
        } else {
            // Failsafe if user doc vanishes
            userData = { username: "User", role: "user", streak: 1, totalCompleted: 0 };
            progressState = {};
        }
    } catch (err) {
        console.error("Error loading user data:", err);
        // Load locally if firebase fails permissions or structure error initially
        progressState = {};
        userData = { username: "Guest", role: "user", streak: 1 };
    }
}

async function calculateAndUpdateStreak(uid, data) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastDate = new Date(data.lastLogin || 0);
    lastDate.setHours(0, 0, 0, 0);

    const diffTime = Math.abs(today - lastDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    let newStreak = data.streak || 0;

    if (diffDays === 1) {
        newStreak += 1; // Logged in yesterday
    } else if (diffDays > 1) {
        newStreak = 1;  // Missed a day
    } else if (diffDays === 0 && !data.lastLogin) {
        newStreak = 1; // First ever login today
    } // If 0 and has lastLogin, they already logged in today, keep streak.

    const todayStr = new Date().toISOString();

    // Update memory
    data.streak = newStreak;
    data.lastLogin = todayStr;

    // Fire & Forget update to DB
    try {
        await db.collection('users').doc(uid).update({
            streak: newStreak,
            lastLogin: todayStr
        });
    } catch (err) {
        console.error("Streak sync issue:", err);
    }
}

async function handleTaskCheck(checkbox) {
    const secId = checkbox.dataset.section;
    const day = parseInt(checkbox.dataset.day);
    const tIndex = parseInt(checkbox.dataset.taskindex);
    const taskId = `${secId}_${day}_${tIndex}`;

    const prevCompletedInDay = countCompletedInDay(secId, day);

    if (checkbox.checked) {
        progressState[taskId] = true;
        checkbox.closest('.task-item').classList.add('completed');
    } else {
        delete progressState[taskId];
        checkbox.closest('.task-item').classList.remove('completed');
    }

    // Sync remote
    const totalCompleted = Object.keys(progressState).length;
    if (userData) userData.totalCompleted = totalCompleted;

    try {
        await db.collection('users').doc(currentFirebaseUser.uid).update({
            progress: progressState,
            totalCompleted: totalCompleted
        });
    } catch (e) {
        console.error("Failed to sync progress:", e);
    }

    updateOverallProgress();

    // Check if day completed to trigger celebration
    const currentCompletedInDay = countCompletedInDay(secId, day);
    const dayTasksTotal = roadmapData.find(s => s.id === secId).days.find(d => d.day === day).tasks.length;

    if (currentCompletedInDay === dayTasksTotal && prevCompletedInDay !== dayTasksTotal) {
        celebrate();
        setTimeout(() => {
            renderSection(secId);
            renderNavigation();
        }, 400);
    } else {
        renderNavigation();
        if (currentCompletedInDay !== dayTasksTotal && prevCompletedInDay === dayTasksTotal) {
            setTimeout(() => renderSection(secId), 400);
        }
    }
}

// ----------------- UI Rendering ----------------- //

function showMainApp() {
    // Hide Auth
    authOverlay.classList.add('opacity-0', 'pointer-events-none');

    // Populate header
    userProfileContainer.classList.remove('hidden');
    userProfileContainer.classList.add('flex');
    headerUsername.textContent = userData?.username || "User";
    headerAvatar.textContent = (userData?.username || "U").charAt(0).toUpperCase();

    // Streaks and Buttons
    streakCount.textContent = userData?.streak || 0;
    streakContainer.classList.remove('hidden');
    streakContainer.classList.add('flex');

    leaderboardBtn.classList.remove('hidden');
    leaderboardBtn.classList.add('block');

    if (userData?.role === 'admin') {
        adminBtn.classList.remove('hidden');
        adminBtn.classList.add('block');
    }

    renderNavigation();
    renderSection(currentSectionId);
    updateOverallProgress();
}

function showAuthScreen() {
    // Reset Data view
    mainContent.innerHTML = '';
    sectionNav.innerHTML = '';
    overallProgressBar.style.width = '0%';
    overallProgressText.textContent = '0%';

    userProfileContainer.classList.add('hidden');
    userProfileContainer.classList.remove('flex');
    streakContainer.classList.add('hidden');
    leaderboardBtn.classList.add('hidden');
    adminBtn.classList.add('hidden');
    badgesContainer.classList.add('hidden');

    authOverlay.classList.remove('opacity-0', 'pointer-events-none');
}

function renderNavigation() {
    sectionNav.innerHTML = '';
    roadmapData.forEach(section => {
        const isActive = section.id === currentSectionId;
        const tasksInSection = section.days.reduce((acc, day) => acc + day.tasks.length, 0);
        const completedInSection = getCompletedCount(section.id);
        const progress = Math.round((completedInSection / tasksInSection) * 100) || 0;

        const navItem = document.createElement('div');
        navItem.className = `nav-item p-4 mb-3 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent 
            ${isActive ? 'active shadow-sm dark:shadow-none bg-white dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-800/50'}`;

        navItem.innerHTML = `
            <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400' : 'bg-gray-100/50 text-gray-500 dark:bg-gray-800 dark:text-gray-400'}">
                    <i class="ph ${section.icon} text-lg"></i>
                </div>
                <div>
                    <h3 class="text-sm font-semibold ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'} leading-snug">${section.title}</h3>
                </div>
            </div>
            <div class="flex items-center justify-between text-xs mt-1">
                <span class="text-gray-500 dark:text-gray-400 font-medium">${completedInSection}/${tasksInSection} tasks</span>
                <span class="font-bold ${progress === 100 ? 'text-green-500' : 'text-primary'}">${progress}%</span>
            </div>
            <div class="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
                <div class="h-full rounded-full transition-all duration-500 ${progress === 100 ? 'bg-green-500' : 'bg-gradient-to-r from-primary to-secondary'}" style="width: ${progress}%"></div>
            </div>
        `;

        navItem.addEventListener('click', () => {
            currentSectionId = section.id;
            renderNavigation();
            renderSection(currentSectionId);
        });

        sectionNav.appendChild(navItem);
    });
}

function renderSection(sectionId) {
    const section = roadmapData.find(s => s.id === sectionId);
    if (!section) return;

    mainContent.scrollTo({ top: 0, behavior: 'smooth' });

    let html = `
        <div class="mb-8 pop-in" style="animation-delay: 0.1s">
            <h1 class="text-3xl font-bold mb-2 break-words text-gray-800 dark:text-gray-100">${section.title}</h1>
            <p class="text-gray-500 flex items-center gap-2 text-sm font-medium">
                <i class="ph ph-calendar-blank"></i> ${section.dateRange}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    `;

    section.days.forEach((dayObj, index) => {
        const completedInDay = countCompletedInDay(section.id, dayObj.day);
        const dayProgress = Math.round((completedInDay / dayObj.tasks.length) * 100) || 0;
        const isAllDone = completedInDay === dayObj.tasks.length;

        html += `
            <div class="glass-panel pop-in flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 ${isAllDone ? 'border-green-400/50 bg-green-50/50 dark:bg-green-900/10 shadow-green-500/10' : ''}" style="animation-delay: ${0.1 + ((index % 10) * 0.05)}s">
                <div class="flex justify-between items-start mb-5">
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider ${isAllDone ? 'text-green-500' : 'text-primary'}">Day ${dayObj.day}</span>
                        <h3 class="font-bold text-[1.05rem] mt-1 line-clamp-2 leading-tight text-gray-800 dark:text-gray-200" title="${dayObj.title}">${dayObj.title}</h3>
                    </div>
                    <div class="w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-bold text-sm shadow-inner ${isAllDone ? 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400' : 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'}">
                        ${isAllDone ? '<i class="ph-bold ph-check text-green-500"></i>' : dayProgress + '%'}
                    </div>
                </div>
                
                <div class="space-y-3 mt-auto flex-1 h-full min-h-[140px] flex flex-col">
                    ${dayObj.tasks.map((task, tIndex) => {
            const taskId = `${section.id}_${dayObj.day}_${tIndex}`;
            const isChecked = progressState[taskId] ? 'checked' : '';
            const completedClass = isChecked ? 'completed' : '';
            const lcUrl = getLeetCodeUrl(task);
            const match = task.match(/LC\s*(\d+)/i);
            const id = match ? parseInt(match[1]) : null;
            const difficulty = leetcodeDifficultyMap[id];
            const diffColor = getDifficultyColor(difficulty);

            return `
                        <label class="task-item flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 cursor-pointer shadow-sm ${completedClass}">
                            <input type="checkbox" class="custom-checkbox shrink-0 mt-0.5" 
                                data-section="${section.id}" 
                                data-day="${dayObj.day}" 
                                data-taskindex="${tIndex}" 
                                ${isChecked}>
                            <span class="text-sm font-medium leading-snug break-words">
                                ${lcUrl ? `<a href="${lcUrl}" target="_blank" class="lc-link hover:underline">${task}</a>` : task}
                                ${difficulty ? `<span class="ml-2 text-[10px] font-bold uppercase tracking-wider ${diffColor} bg-gray-50 dark:bg-gray-900/50 px-1.5 py-0.5 rounded border border-current opacity-80">${difficulty}</span>` : ''}
                            </span>
                        </label>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    });

    html += `</div>`;
    mainContent.innerHTML = html;

    // Prevent clicking the link from checking the checkbox
    document.querySelectorAll('.lc-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    document.querySelectorAll('.custom-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => handleTaskCheck(e.target));
    });
}

const leetcodeSlugMap = {
    167: "two-sum-ii-input-array-is-sorted",
    125: "valid-palindrome",
    977: "squares-of-a-sorted-array",
    283: "move-zeroes",
    26: "remove-duplicates-from-sorted-array",
    27: "remove-element",
    80: "remove-duplicates-from-sorted-array-ii",
    88: "merge-sorted-array",
    11: "container-with-most-water",
    15: "3sum",
    16: "3sum-closest",
    18: "4sum",
    881: "boats-to-save-people",
    42: "trapping-rain-water",
    75: "sort-colors",
    209: "minimum-size-subarray-sum",
    643: "maximum-average-subarray-i",
    1456: "maximum-number-of-vowels-in-a-substring-of-given-length",
    1004: "max-consecutive-ones-iii",
    904: "fruit-into-baskets",
    424: "longest-repeating-character-replacement",
    239: "sliding-window-maximum",
    76: "minimum-window-substring",
    303: "range-sum-query-immutable",
    1480: "running-sum-of-1d-array",
    724: "find-pivot-index",
    560: "subarray-sum-equals-k",
    523: "continuous-subarray-sum",
    525: "contiguous-array",
    238: "product-of-array-except-self",
    53: "maximum-subarray",
    152: "maximum-product-subarray",
    121: "best-time-to-buy-and-sell-stock",
    122: "best-time-to-buy-and-sell-stock-ii",
    189: "rotate-array",
    48: "rotate-image",
    344: "reverse-string",
    151: "reverse-words-in-a-string",
    31: "next-permutation",
    41: "first-missing-positive",
    268: "missing-number",
    287: "find-the-duplicate-number",
    169: "majority-element",
    136: "single-number",
    215: "kth-largest-element-in-an-array",
    347: "top-k-frequent-elements",
    14: "longest-common-prefix",
    680: "valid-palindrome-ii",
    415: "add-strings",
    43: "multiply-strings",
    242: "valid-anagram",
    49: "group-anagrams",
    387: "first-unique-character-in-a-string",
    205: "isomorphic-strings",
    290: "word-pattern",
    3: "longest-substring-without-repeating-characters",
    438: "find-all-anagrams-in-a-string",
    567: "permutation-in-string",
    5: "longest-palindromic-substring",
    647: "palindromic-substrings",
    131: "palindrome-partitioning",
    20: "valid-parentheses",
    394: "decode-string",
    150: "evaluate-reverse-polish-notation",
    32: "longest-valid-parentheses",
    28: "find-the-index-of-the-first-occurrence-in-a-string",
    259: "3sum-smaller",
    1877: "minimize-maximum-pair-sum-in-array",
    487: "max-consecutive-ones-ii",
    713: "subarray-product-less-than-k",
    1343: "number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold",
    1052: "grumpy-bookstore-owner",
    930: "binary-subarrays-with-sum",
    1248: "count-number-of-nice-subarrays",
    992: "subarrays-with-k-different-integers",
    325: "maximum-size-subarray-sum-equals-k",
    1588: "sum-of-all-odd-length-subarrays",
    1423: "maximum-points-you-can-obtain-from-cards",
    1109: "corporate-flight-bookings",
    1094: "car-pooling",
    1314: "matrix-block-sum",
    1395: "count-number-of-teams",
    1749: "maximum-absolute-sum-of-any-subarray",
    1191: "k-concatenation-maximum-sum",
    1746: "maximum-subarray-sum-after-one-operation",
    1793: "maximum-score-of-a-good-subarray",
    2149: "rearrange-array-elements-by-sign",
    1470: "shuffle-the-array",
    280: "wiggle-sort",
    442: "find-all-duplicates-in-an-array",
    229: "majority-element-ii",
    137: "single-number-ii",
    260: "single-number-iii",
    162: "find-peak-element",
    852: "peak-index-in-a-mountain-array",
    274: "h-index",
    164: "maximum-gap",
    541: "reverse-string-ii",
    557: "reverse-words-in-a-string-iii",
    451: "sort-characters-by-frequency",
    389: "find-the-difference",
    771: "jewels-and-stones",
    1002: "find-common-characters",
    159: "longest-substring-with-at-most-two-distinct-characters",
    340: "longest-substring-with-at-most-k-distinct-characters",
    187: "repeated-dna-sequences",
    1100: "find-k-length-substrings-with-no-repeated-characters",
    132: "palindrome-partitioning-ii",
    516: "longest-palindromic-subsequence",
    234: "palindrome-linked-list",
    409: "longest-palindrome",
    214: "shortest-palindrome",
    266: "palindrome-permutation",
    71: "simplify-path",
    227: "basic-calculator-ii",
    224: "basic-calculator",
    856: "score-of-parentheses",
    921: "minimum-add-to-make-parentheses-valid",
    1249: "minimum-remove-to-make-valid-parentheses",
    459: "repeated-substring-pattern",
    686: "repeated-string-match",
    1044: "longest-duplicate-substring",
    1062: "longest-repeating-substring"
};

const leetcodeDifficultyMap = {
    // EASY
    167: "Easy", 125: "Easy", 977: "Easy", 283: "Easy", 26: "Easy", 27: "Easy", 88: "Easy",
    344: "Easy", 58: "Easy", 14: "Easy", 242: "Easy", 387: "Easy", 383: "Easy", 771: "Easy",
    1002: "Easy", 20: "Easy", 136: "Easy", 121: "Easy", 1480: "Easy", 724: "Easy", 303: "Easy",
    561: "Easy", 268: "Easy", 169: "Easy", 409: "Easy", 28: "Easy", 459: "Easy",

    // MEDIUM
    80: "Medium", 11: "Medium", 15: "Medium", 16: "Medium", 18: "Medium", 881: "Medium",
    259: "Medium", 75: "Medium", 1877: "Medium", 844: "Easy", 2161: "Medium", 1679: "Medium",
    209: "Medium", 643: "Easy", 1456: "Medium", 1004: "Medium", 487: "Medium", 904: "Medium",
    424: "Medium", 713: "Medium", 1343: "Medium", 1052: "Medium", 930: "Medium", 1248: "Medium",
    992: "Medium", 560: "Medium", 523: "Medium", 525: "Medium", 325: "Medium", 238: "Medium", 53: "Medium",
    1588: "Easy", 1423: "Medium", 1109: "Medium", 1094: "Medium", 1314: "Medium", 304: "Medium",
    1395: "Medium", 152: "Medium", 918: "Medium", 978: "Medium", 1749: "Medium", 122: "Medium",
    1191: "Medium", 1746: "Medium", 1793: "Medium", 1793: "Medium", 189: "Medium", 48: "Medium", 151: "Medium",
    31: "Medium", 2149: "Medium", 1470: "Easy", 280: "Medium", 73: "Medium", 287: "Medium",
    442: "Medium", 229: "Medium", 137: "Medium", 260: "Medium", 162: "Medium", 852: "Easy",
    274: "Medium", 215: "Medium", 347: "Medium", 164: "Hard",

    // HARD
    42: "Hard", 239: "Hard", 76: "Hard", 41: "Hard",

    // STRINGS
    541: "Easy", 557: "Easy", 680: "Easy", 415: "Easy", 43: "Medium",
    49: "Medium", 451: "Medium", 205: "Easy", 290: "Easy", 389: "Easy",
    3: "Medium", 159: "Medium", 340: "Medium", 438: "Medium", 567: "Medium",
    187: "Medium", 1100: "Medium",
    5: "Medium", 647: "Medium", 131: "Medium", 132: "Hard", 516: "Medium",
    234: "Easy", 214: "Hard", 266: "Easy",
    71: "Medium", 394: "Medium", 227: "Medium", 224: "Hard",
    150: "Medium", 856: "Medium", 32: "Hard", 921: "Medium", 1249: "Medium",
    686: "Medium", 1044: "Hard", 1062: "Medium"
};

function getDifficultyColor(diff) {
    if (diff === "Easy") return "text-green-500";
    if (diff === "Medium") return "text-yellow-500";
    if (diff === "Hard") return "text-red-500";
    return "text-gray-400";
}

function getLeetCodeUrl(taskText) {
    if (!taskText.startsWith('LC ')) return null;

    const match = taskText.match(/LC\s*(\d+)/i);
    if (!match) return null;

    const id = parseInt(match[1]);
    const slug = leetcodeSlugMap[id];

    if (!slug) {
        // Safe Fallback: Open search page if slug is missing
        return `https://leetcode.com/problemset/all/?search=${id}`;
    }

    return `https://leetcode.com/problems/${slug}/`;
}

function updateOverallProgress() {
    const completed = getCompletedCount();
    const progress = Math.round((completed / totalTasksCount) * 100) || 0;

    overallProgressBar.style.width = `${progress}%`;
    overallProgressText.textContent = `${progress}%`;

    if (progress === 100) {
        overallProgressText.classList.remove('text-primary');
        overallProgressText.classList.add('text-green-500');
    } else {
        overallProgressText.classList.add('text-primary');
        overallProgressText.classList.remove('text-green-500');
    }

    renderBadges(progress, userData?.streak || 0);
}

function renderBadges(progressPct, streak) {
    let bHTML = '';
    // Starter: At least 1 task done
    if (progressPct > 0) {
        bHTML += `<div class="p-1 rounded-md bg-stone-100 dark:bg-stone-800 shadow-inner" title="Initiator (Started!+)"><i class="ph-fill ph-medal text-stone-500"></i></div>`;
    }
    // Deep Diver: 50%
    if (progressPct >= 50) {
        bHTML += `<div class="p-1 rounded-md bg-blue-100 dark:bg-blue-900/30 shadow-inner" title="Halfway There!"><i class="ph-fill ph-medal text-blue-500"></i></div>`;
    }
    // Completionist
    if (progressPct >= 100) {
        bHTML += `<div class="p-1 rounded-md bg-yellow-100 dark:bg-yellow-900/30 shadow-inner" title="Placement Ready! (100%)"><i class="ph-fill ph-trophy text-yellow-500"></i></div>`;
    }
    // Consistency
    if (streak >= 7) {
        bHTML += `<div class="p-1 rounded-md bg-orange-100 dark:bg-orange-900/30 shadow-inner" title="Disciplined (7 Day Streak)"><i class="ph-fill ph-fire text-orange-500"></i></div>`;
    }

    if (bHTML) {
        badgesContainer.innerHTML = bHTML;
        badgesContainer.classList.remove('hidden');
        badgesContainer.classList.add('flex');
    } else {
        badgesContainer.classList.add('hidden');
        badgesContainer.classList.remove('flex');
    }
}

// ----------------- Auth Integrations ----------------- //

function setupAuthListeners() {
    showRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginFormContainer.classList.add('hidden');
        registerFormContainer.classList.remove('hidden');
        registerError.classList.add('hidden');
    });

    showLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        registerFormContainer.classList.add('hidden');
        loginFormContainer.classList.remove('hidden');
        loginError.classList.add('hidden');
    });

    // Firebase Register
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value;

        registerError.classList.add('hidden');
        authLoading.classList.remove('hidden');

        try {
            // Check if username already exists across all users by querying first if necessary
            // For now, allow duplicates, or user logic ensures uniqueness.
            // Using Firebase built-in auth for email/pwd
            const uc = await auth.createUserWithEmailAndPassword(email, password);

            // Create profile structure in Firestore
            await db.collection('users').doc(uc.user.uid).set({
                uid: uc.user.uid,
                email: email,
                username: username,
                role: 'user', // "admin" manually given directly via DB
                streak: 1,
                lastLogin: new Date().toISOString(),
                totalCompleted: 0,
                progress: {}
            });

            registerForm.reset();
            // auth listener handles redirect naturally
        } catch (err) {
            registerError.textContent = err.message;
            registerError.classList.remove('hidden');
        } finally {
            authLoading.classList.add('hidden');
        }
    });

    // Firebase Login
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;

        loginError.classList.add('hidden');
        authLoading.classList.remove('hidden');

        try {
            await auth.signInWithEmailAndPassword(email, password);
            loginForm.reset();
        } catch (err) {
            loginError.textContent = "Invalid email or password.";
            loginError.classList.remove('hidden');
        } finally {
            authLoading.classList.add('hidden');
        }
    });

    logoutBtn.addEventListener('click', async () => {
        await auth.signOut();
    });
}

function setupModals() {
    // Leaderboard Data Fetching
    leaderboardBtn.addEventListener('click', async () => {
        leaderboardModal.classList.remove('hidden');
        leaderboardModal.classList.add('flex');
        const content = document.getElementById('leaderboard-content');
        content.innerHTML = '<div class="text-center text-gray-500 py-12 font-medium"><i class="ph ph-spinner animate-spin text-3xl mb-3 text-indigo-500"></i><br>Fetching heroes...</div>';

        try {
            const snapshot = await db.collection('users').orderBy('totalCompleted', 'desc').limit(50).get();
            let html = '';
            let rank = 1;
            snapshot.forEach(doc => {
                const u = doc.data();
                const isMe = u.uid === currentFirebaseUser?.uid;

                let rankColor = 'text-gray-400 dark:text-gray-500';
                let rankIcon = '';
                if (rank === 1) { rankColor = 'text-yellow-500 dark:text-yellow-400'; rankIcon = '<i class="ph-fill ph-crown ml-1"></i>'; }
                if (rank === 2) { rankColor = 'text-gray-400 dark:text-gray-300'; }
                if (rank === 3) { rankColor = 'text-amber-600 dark:text-amber-500'; }

                const userPct = Math.round(((u.totalCompleted || 0) / totalTasksCount) * 100);

                html += `
                    <div class="flex items-center justify-between p-4 rounded-2xl ${isMe ? 'bg-indigo-50/80 border border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-800/50 shadow-sm' : 'bg-gray-50 dark:bg-gray-800/50 border border-transparent'}">
                        <div class="flex items-center gap-4">
                            <div class="w-10 text-center font-black text-xl flex justify-center items-center ${rankColor}">#${rank}${rankIcon}</div>
                            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-inner shrink-0">
                                ${(u.username || 'U').charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <div class="font-bold text-[1.1rem] leading-tight ${isMe ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-800 dark:text-gray-200'}">${u.username} ${isMe ? '<span class="text-xs font-normal opacity-70">(You)</span>' : ''}</div>
                                <div class="flex items-center gap-3 mt-1">
                                    <div class="text-xs text-orange-500 font-semibold flex items-center gap-1 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded-md"><i class="ph-fill ph-fire"></i> ${u.streak || 0}</div>
                                    <div class="text-xs text-blue-500 font-semibold flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded-md">Lv. ${Math.floor(userPct / 10) + 1}</div>
                                </div>
                            </div>
                        </div>
                        <div class="text-right flex flex-col items-end gap-1">
                            <div class="font-bold text-2xl leading-none text-gray-800 dark:text-gray-100">${u.totalCompleted || 0}</div>
                            <div class="text-[0.65rem] uppercase tracking-wider font-bold text-gray-400">Tasks</div>
                        </div>
                    </div>
                `;
                rank++;
            });
            content.innerHTML = html || '<div class="text-center text-gray-400 py-12">No data yet. Lead the charge!</div>';
        } catch (e) {
            console.error("Leaderboard error:", e);
            content.innerHTML = `<div class="text-center text-red-500 py-12 font-medium">Error loading leaderboard<br><span class="text-xs text-red-400 mt-2 block">${e.message}</span><br><span class="text-xs text-gray-500 mt-2 block">If it's a "Missing or insufficient permissions" error, please update your Firestore Rules to allow reading users.</span></div>`;
        }
    });

    // Admin Dashboard Data Fetching
    adminBtn.addEventListener('click', async () => {
        adminModal.classList.remove('hidden');
        adminModal.classList.add('flex');
        const tbody = document.getElementById('admin-users-list');
        tbody.innerHTML = '<tr><td colspan="5" class="py-12 text-center text-gray-500 font-medium"><i class="ph ph-spinner animate-spin text-2xl mb-3 text-purple-500"></i><br>Securing connection & fetching...</td></tr>';

        try {
            const snapshot = await db.collection('users').orderBy('totalCompleted', 'desc').get();
            let html = '';
            let tUsers = 0;
            let tTasks = 0;
            let topStreak = 0;

            snapshot.forEach(doc => {
                const u = doc.data();
                tUsers++;
                tTasks += (u.totalCompleted || 0);
                if ((u.streak || 0) > topStreak) topStreak = u.streak || 0;

                const pct = Math.round(((u.totalCompleted || 0) / totalTasksCount) * 100);

                html += `
                    <tr class="hover:bg-gray-50/80 dark:hover:bg-gray-800/40 transition-colors group">
                        <td class="py-4 px-4 font-semibold text-gray-800 dark:text-gray-200">
                            <div class="flex items-center gap-2">
                                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-xs font-bold shadow-inner">
                                    ${(u.username || 'U').charAt(0).toUpperCase()}
                                </div>
                                ${u.username}
                            </div>
                        </td>
                        <td class="py-4 px-4 text-sm text-gray-500 truncate max-w-[150px]" title="${u.email}">${u.email}</td>
                        <td class="py-4 px-4">
                            <div class="flex items-center gap-3">
                                <span class="text-xs font-bold w-8 ${pct === 100 ? 'text-green-500' : 'text-gray-600 dark:text-gray-300'}">${pct}%</span>
                                <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shrink-0">
                                    <div class="h-full rounded-full transition-all ${pct === 100 ? 'bg-green-500' : 'bg-gradient-to-r from-primary to-secondary'}" style="width: ${pct}%"></div>
                                </div>
                            </div>
                        </td>
                        <td class="py-4 px-4 text-orange-500 font-bold"><i class="ph-fill ph-fire"></i> ${u.streak || 0}</td>
                        <td class="py-4 px-4">
                            <span class="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${u.role === 'admin' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50' : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'}">${u.role || 'user'}</span>
                        </td>
                    </tr>
                `;
            });
            tbody.innerHTML = html;
            document.getElementById('admin-total-users').textContent = tUsers;
            document.getElementById('admin-top-streak').textContent = topStreak;

            const avg = tUsers > 0 ? Math.round((tTasks / tUsers) / totalTasksCount * 100) : 0;
            document.getElementById('admin-avg-completion').textContent = avg + '%';

        } catch (e) {
            tbody.innerHTML = '<tr><td colspan="5" class="py-12 text-center text-red-500 font-medium bg-red-50 dark:bg-red-900/10">Error loading users data. Ensure your user has sufficient permissions set up in Firestore Rules.</td></tr>';
        }
    });

    document.getElementById('close-leaderboard').addEventListener('click', () => {
        leaderboardModal.classList.add('hidden');
        leaderboardModal.classList.remove('flex');
    });

    document.getElementById('close-admin').addEventListener('click', () => {
        adminModal.classList.add('hidden');
        adminModal.classList.remove('flex');
    });

    window.addEventListener('click', (e) => {
        if (e.target === leaderboardModal) {
            leaderboardModal.classList.add('hidden');
            leaderboardModal.classList.remove('flex');
        }
        if (e.target === adminModal) {
            adminModal.classList.add('hidden');
            adminModal.classList.remove('flex');
        }
    });
}

// Check utils
function getCompletedCount(sectionId = null) {
    let count = 0;
    for (const key in progressState) {
        if (!sectionId || key.startsWith(sectionId + '_')) {
            count++;
        }
    }
    return count;
}

function countCompletedInDay(sectionId, dayNum) {
    let count = 0;
    for (const key in progressState) {
        if (key.startsWith(`${sectionId}_${dayNum}_`)) {
            count++;
        }
    }
    return count;
}

function celebrate() {
    celebrationModal.classList.remove('opacity-0', 'pointer-events-none');
    celebrationModal.querySelector('h2').classList.remove('scale-50');
    celebrationModal.querySelector('h2').classList.add('scale-100');

    setTimeout(() => {
        celebrationModal.classList.add('opacity-0', 'pointer-events-none');
        celebrationModal.querySelector('h2').classList.add('scale-50');
        celebrationModal.querySelector('h2').classList.remove('scale-100');
    }, 2000);
}

// Theme
function setupTheme() {
    const isDark = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
}

// Run
document.addEventListener('DOMContentLoaded', init);
