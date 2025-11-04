// Game state
let gameState = {
    currentScreen: 'loading',
    unlockedMaps: [1], // Map 1 is unlocked by default
    playerName: '',
    musicEnabled: true, // Auto-enable music
    musicPlaying: false,
    currentMusic: 'background', // 'background' or 'fruit'
    settings: {
        bgMusicVolume: 30, // 0-100
        sfxVolume: 70 // 0-100
    },
    // Classroom system
    isTeacher: false,
    isStudent: false,
    classroomCode: '',
    selectedClass: '',
    selectedStudent: '',
    studentScores: {
        thaiFruit: { diamonds: 0, correctAnswers: 0 },
        mathRunner: { diamonds: 0, correctAnswers: 0 },
        scienceFight: { diamonds: 0, correctAnswers: 0 }
    }
};

// Classroom data
let classroomData = {
    code: '',
    students: [],
    testStarted: false,
    maxStudents: 40
};

// Student lists
const studentLists = {
    'ม.3/1': [
        'เด็กหญิง ฐานิกา คงคะจันทร์',
        'เด็กชาย บดินทร์ พลอยฉาย',
        'เด็กชาย ธนกฤต ฉ่ำคุ่ย',
        'เด็กหญิง นฤมล จันทร์คำพา',
        'เด็กหญิง วรพิชชา คะสุดใจ',
        'เด็กชาย กฤษกร ชูนุกูลวงศ์',
        'เด็กชาย ภูริ จีนสมบูรณ์',
        'เด็กชาย พีระธรรม พิชิตเดช',
        'นาย ศุภวิชญ์ เจี๊ยบนา',
        'เด็กชาย จอมทัพ ทุ่มดวง',
        'นาย พงศ์พิพัฒน์ ชาลีนิวัฒน์',
        'เด็กชาย สมาธิ รุ่มนุ่ม',
        'เด็กหญิง กัลยาณี ขุนทรง',
        'นางสาว อภิสรา จีนถนอม',
        'นางสาว อาภัสรา เกิดจังหวัด',
        'เด็กหญิง สมิดา สีแก้ว',
        'เด็กหญิง ขวัญพรรษา บัวจำรัส',
        'เด็กชาย ธีรภัทร์ ขุมทอง',
        'เด็กชาย พัทธดนย์ จันทนนตรี',
        'เด็กหญิง พัชราพร นาคีสินธุ์',
        'เด็กชาย อนุพนธ์ จิตต์ทิพย์',
        'เด็กชาย ปลาวาฬ บุญญาภานุกูล',
        'เด็กหญิง อริสา แซ่ลิ้ม',
        'เด็กชาย ยุทธพงษ์ พึ่งฤกษ์ดี',
        'เด็กชาย ธรรมพัฒน์ จันทรเตมีย์',
        'เด็กชาย ศรายุธ เทียนพิทักษ์',
        'เด็กหญิง สุพิชชาญา สายทองเยิ้น',
        'เด็กชาย ยุทธจักร จินดาศรี',
        'เด็กชาย พานุวัฒน์ ไกรพล',
        'เด็กชาย รัชชานนท์ ซ้วนสุวรรณ',
        'เด็กชาย ธรรศ พิมพ์ทอง',
        'นาย รัฐภูมิ เอกทุ่งบัว',
        'เด็กชาย องศารัก สัตถาพร',
        'นาย รชต บำรุงเศรษฐพงษ์'
    ],
    'ม.3/2': [
        'เด็กหญิง ฐิรญา สุขสมัย',
        'เด็กชาย ธนโชติ แสงเทียน',
        'เด็กชาย อณุสิทธิ์ ศรีพระจันทร์',
        'นาย พีรดนย์ แสงล้ำ',
        'เด็กหญิง อริสา ปานสกุล',
        'เด็กชาย แทนคุณ ศรีสุจารย์',
        'เด็กชาย ณัฐวัฒน์ ศรีสุรินทร์',
        'เด็กชาย ปัณณวิชญ์ มาเจริญ',
        'เด็กชาย ยุทธนา บุญหนา',
        'เด็กชาย พชร เกิดไพบูลย์',
        'เด็กชาย มุขพล แสงใหญ่',
        'เด็กชาย ธนกร กุ๊ยเกร็ด',
        'เด็กหญิง กุลภัสสรณ์ คูสินทรัพย์',
        'เด็กชาย คณากร หร่ายมณี',
        'เด็กชาย ศิวะพัฒน์ คำจวง',
        'เด็กชาย ณิชนันทน์ พยุงกิจ',
        'เด็กหญิง ภัทรธิดา ชังชั่ว',
        'เด็กหญิง ธนาภา วรรณกิจ',
        'เด็กชาย ชนะชัย วิวัฒน์สถิตกุล',
        'เด็กชาย วันชนะ อินกองงาม',
        'เด็กชาย ธาราธิต ยอดละมัย',
        'เด็กหญิง พัชรินทร์ จ้อยจินดา',
        'เด็กชาย อัฏฐวัฒน์ กุลลิขิตกุศล',
        'เด็กชาย ภัทรพล อินค้า',
        'เด็กชาย มิ่งขวัญ แสงสุวรรณ',
        'เด็กชาย จตุรพงษ์ ใจเด็ด',
        'เด็กชาย เขมชาติ ลาภจิตร์',
        'เด็กชาย รังสิมันต์ ชาติเจริญ',
        'เด็กชาย ชนาวุทธิ์ อำนาจชัยกุล',
        'เด็กชาย ศักย์ศรณ์ ประเสริฐวงษ์'
    ]
};

// Image preloading - รวมรูปภาพทั้งหมดที่ใช้ในเกม
const imagesToLoad = [
    'https://i.ibb.co/GQWFvqSq/header-Logo.png',
    'https://i.ibb.co/q32sqbxy/MapTItle.png',
    'https://i.ibb.co/xwWjWn5/ThaiMap.png',
    'https://i.ibb.co/HDtmKyCz/MathMap.png',
    'https://i.ibb.co/DHvqWQzP/Science-Map.png',
    'https://i.ibb.co/DgmGTJKX/mapBg.png',
    // Desktop backgrounds
    'https://i.ibb.co/SDbgDzZq/bgStart1.png',
    'https://i.ibb.co/DggBkQSM/bgStart2.png',
    // Mobile backgrounds
    'https://i.ibb.co/QFt23jdv/mbg-Start1.png',
    'https://i.ibb.co/KpXsKDdt/mbg-Start2.png',
    'https://i.ibb.co/gZMWDLmC/mbg-Start3.png',
    // Desktop loading backgrounds
    'https://i.ibb.co/Ldp0LrMZ/loading-Bg1.png',
    'https://i.ibb.co/PzcYrZJF/loading-Bg2.png',
    // Mobile loading backgrounds
    'https://i.ibb.co/s9GSwMMF/loading-Mbg1.png',
    'https://i.ibb.co/YBfnn813/loading-Mbg2.png',
    // Fruit game backgrounds
    'https://i.ibb.co/JWJQkQcp/Thai-Fruit-Merge-MB.png',
    'https://i.ibb.co/xKsgF19h/Thai-Fruit-Merge-PC.png',
    // Math Runner backgrounds - Desktop
    'https://i.ibb.co/spB14Y3H/bg.jpg',
    'https://i.ibb.co/ZRx4YLYy/bg2.jpg',
    'https://i.ibb.co/bjdFvp1c/bg3.jpg',
    'https://i.ibb.co/tP3TM57Z/bg4.jpg',
    // Math Runner backgrounds - Mobile
    'https://i.ibb.co/xS8bqrxs/mbg1.jpg',
    'https://i.ibb.co/spnx9BPb/mbg2.jpg',
    'https://i.ibb.co/nssmJSyF/mbg3.jpg',
    'https://i.ibb.co/Z6qxWMr8/mbg4.jpg',
    // Math Runner character images
    'https://i.ibb.co/4gp4jLj2/maincharater.png',
    'https://i.ibb.co/YB2NgC6r/run.png',
    // Math Runner box images
    'https://i.ibb.co/dwqSMDwQ/watermelon.png',
    'https://i.ibb.co/7xjJnzTR/tomato.png',
    'https://i.ibb.co/Zp4CZg6f/strawberry.png',
    'https://i.ibb.co/GfZWmWb8/orange.png',
    'https://i.ibb.co/KxVKNZBq/durian.png',
    'https://i.ibb.co/jPs5x34M/kiwi.png',
    'https://i.ibb.co/0jmpmNQs/dragonfruit.png',
    'https://i.ibb.co/kV23MN8S/carrot.png',
    'https://i.ibb.co/rRF1JCx6/blueberry.png',
    // Math Runner special boxes
    'https://i.ibb.co/8nXCj74f/rainbow.png',
    'https://i.ibb.co/xqWdszjs/speed.png',
    'https://i.ibb.co/hJ33VQky/slowness.png',
    'https://i.ibb.co/v43htZzN/bomb.png',
    'https://i.ibb.co/TDHxR5qM/diamond.png',
    // Fruit images
    'https://i.ibb.co/JRLcPzTt/banana.png',
    'https://i.ibb.co/Ng15M3C3/mango.png',
    'https://i.ibb.co/C5vDhBvd/pineapple.png',
    'https://i.ibb.co/jkZZ5xNS/coconut.png',
    'https://i.ibb.co/hJrTKCND/melon.png',
    'https://i.ibb.co/dw2g7G4S/watermelon.png',
    'https://i.ibb.co/qFn35vNM/durian.png',
    'https://i.ibb.co/kp03phJ/victory.png',
    'https://i.ibb.co/Vczc8s0N/fruit-Work.png',
    'https://i.ibb.co/CpcsXpMx/diamond1.png',
    'https://i.ibb.co/39tCZbzW/diamond2.png',
    'https://i.ibb.co/jZJDQ9qB/diamond3.png'
];

// Responsive background images
const desktopBgs = [
    'https://i.ibb.co/SDbgDzZq/bgStart1.png',
    'https://i.ibb.co/DggBkQSM/bgStart2.png'
];

const mobileBgs = [
    'https://i.ibb.co/QFt23jdv/mbg-Start1.png',
    'https://i.ibb.co/KpXsKDdt/mbg-Start2.png',
    'https://i.ibb.co/gZMWDLmC/mbg-Start3.png'
];

const desktopLoadingBgs = [
    'https://i.ibb.co/Ldp0LrMZ/loading-Bg1.png',
    'https://i.ibb.co/PzcYrZJF/loading-Bg2.png'
];

const mobileLoadingBgs = [
    'https://i.ibb.co/s9GSwMMF/loading-Mbg1.png',
    'https://i.ibb.co/YBfnn813/loading-Mbg2.png'
];

// Check if mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// ปรับขนาดเกมตามขนาดหน้าจอ
function adjustGameSize() {
    const gameContainer = document.getElementById('gameContainer');
    const gameCanvas = document.getElementById('gameCanvas');
    const fruitMergeGame = document.getElementById('fruitMergeGame');
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // ขยายพื้นหลังเต็มจอ
    fruitMergeGame.style.width = '100vw';
    fruitMergeGame.style.height = '100vh';
    fruitMergeGame.style.position = 'fixed';
    fruitMergeGame.style.top = '0';
    fruitMergeGame.style.left = '0';
    
    if (screenWidth > 768) {
        // สำหรับจอใหญ่ - คำนวณขนาดพื้นที่เกมที่เหมาะสม (รักษาอัตราส่วน)
        const aspectRatio = 470 / 780;
        let gameWidth, gameHeight;
        
        if (screenWidth / screenHeight > aspectRatio) {
            // หน้าจอกว้างกว่าอัตราส่วนเกม
            gameHeight = screenHeight * 0.9; // ใช้ 90% ของความสูงจอ
            gameWidth = gameHeight * aspectRatio;
        } else {
            // หน้าจอสูงกว่าอัตราส่วนเกม
            gameWidth = screenWidth * 0.8; // ใช้ 80% ของความกว้างจอ
            gameHeight = gameWidth / aspectRatio;
        }
        
        // ปรับขนาด container และ canvas
        gameContainer.style.width = gameWidth + 'px';
        gameContainer.style.height = gameHeight + 'px';
        gameCanvas.width = gameWidth;
        gameCanvas.height = gameHeight;
        
        // อัพเดตขนาดเกมในตัวแปร
        fruitGame.gameWidth = gameWidth;
        fruitGame.gameHeight = gameHeight;
        fruitGame.dangerLine = gameHeight * 0.2; // 20% จากด้านบน
        
        // ปรับตำแหน่งเส้นแดง
        const dangerLine = document.getElementById('dangerLine');
        dangerLine.style.top = fruitGame.dangerLine + 'px';
        
    } else {
        // สำหรับมือถือ - ปรับขนาดให้พอดีกับหน้าจอ
        const maxWidth = screenWidth - 20; // เว้นขอบ 10px ทั้งสอง
        const maxHeight = screenHeight - 20; // เว้นขอบ 10px บนล่าง
        const aspectRatio = 470 / 780;
        
        let gameWidth, gameHeight;
        
        if (maxWidth / maxHeight > aspectRatio) {
            // หน้าจอกว้างกว่าอัตราส่วนเกม
            gameHeight = maxHeight;
            gameWidth = gameHeight * aspectRatio;
        } else {
            // หน้าจอสูงกว่าอัตราส่วนเกม
            gameWidth = maxWidth;
            gameHeight = gameWidth / aspectRatio;
        }
        
        // ปรับขนาด container และ canvas
        gameContainer.style.width = gameWidth + 'px';
        gameContainer.style.height = gameHeight + 'px';
        gameCanvas.width = gameWidth;
        gameCanvas.height = gameHeight;
        
        // อัพเดตขนาดเกมในตัวแปร
        fruitGame.gameWidth = gameWidth;
        fruitGame.gameHeight = gameHeight;
        fruitGame.dangerLine = gameHeight * 0.205; // 20.5% จากด้านบน
        
        // ปรับตำแหน่งเส้นแดง
        const dangerLine = document.getElementById('dangerLine');
        dangerLine.style.top = fruitGame.dangerLine + 'px';
        
        // ปรับขนาด UI elements สำหรับมือถือ
        adjustMobileUI(gameWidth, gameHeight);
    }
}

// ปรับ UI สำหรับมือถือ
function adjustMobileUI(gameWidth, gameHeight) {
    const scaleRatio = gameWidth / 470; // อัตราส่วนการปรับขนาด
    
    // ปรับ next fruit preview สำหรับมือถือ
    const nextFruitContainer = document.querySelector('#nextFruitPreview').parentElement.parentElement;
    const previewSize = Math.max(48, 56 * scaleRatio);
    const previewInnerSize = Math.max(32, 40 * scaleRatio);
    
    nextFruitContainer.style.top = (80 * scaleRatio) + 'px';
    nextFruitContainer.style.right = (16 * scaleRatio) + 'px';
    
    const previewBox = nextFruitContainer.querySelector('div');
    previewBox.style.width = previewSize + 'px';
    previewBox.style.height = previewSize + 'px';
    previewBox.style.padding = Math.max(6, 8 * scaleRatio) + 'px';
    
    const previewDiv = document.getElementById('nextFruitPreview');
    previewDiv.style.width = previewInnerSize + 'px';
    previewDiv.style.height = previewInnerSize + 'px';
    
    // ปรับ progress bar สำหรับมือถือ
    const progressContainer = document.getElementById('currentProgress').parentElement;
    progressContainer.style.top = Math.max(180, 248 * scaleRatio) + 'px';
    
    // ปรับขนาด progress bar elements
    const progressBar = document.getElementById('progressBar').parentElement;
    progressBar.style.width = Math.max(96, 128 * scaleRatio) + 'px';
    progressBar.style.height = Math.max(6, 8 * scaleRatio) + 'px';
    
    const progressBarInner = document.getElementById('progressBar');
    progressBarInner.style.height = Math.max(6, 8 * scaleRatio) + 'px';
    
    // ปรับขนาดไอคอนผลไม้ใน progress
    const fruitIcon = document.getElementById('currentFruitIcon');
    const iconSize = Math.max(16, 24 * scaleRatio);
    fruitIcon.style.width = iconSize + 'px';
    fruitIcon.style.height = iconSize + 'px';
}

// Music control functions
function initBackgroundMusic() {
    const bgMusic = document.getElementById('backgroundMusic');
    const fruitMusic = document.getElementById('fruitGameMusic');
    
    // Set initial volumes based on settings
    updateMusicVolumes();
    
    // Load settings from localStorage
    loadSettings();
    
    // Remove autoplay and muted attributes to prevent conflicts
    bgMusic.removeAttribute('autoplay');
    bgMusic.removeAttribute('muted');
    fruitMusic.removeAttribute('autoplay');
    fruitMusic.removeAttribute('muted');
    
    // Set initial state
    bgMusic.muted = false;
    fruitMusic.muted = false;
    bgMusic.loop = true;
    fruitMusic.loop = true;
    
    // Try to load both music files
    bgMusic.addEventListener('canplaythrough', () => {
        console.log('🎵 Background music loaded and ready to play');
    });
    
    fruitMusic.addEventListener('canplaythrough', () => {
        console.log('🎵 Fruit game music loaded and ready to play');
    });
    
    bgMusic.addEventListener('error', (e) => {
        console.warn('⚠️ Could not load background music:', e);
    });
    
    fruitMusic.addEventListener('error', (e) => {
        console.warn('⚠️ Could not load fruit game music:', e);
    });
    
    // Ensure loop works properly for both
    bgMusic.addEventListener('ended', () => {
        if (gameState.musicEnabled && gameState.currentMusic === 'background') {
            bgMusic.currentTime = 0;
            bgMusic.play().catch(e => console.warn('Background music replay failed:', e));
        }
    });
    
    fruitMusic.addEventListener('ended', () => {
        if (gameState.musicEnabled && gameState.currentMusic === 'fruit') {
            fruitMusic.currentTime = 0;
            fruitMusic.play().catch(e => console.warn('Fruit music replay failed:', e));
        }
    });
    
    console.log('🎵 Music initialization complete');
}

function updateMusicVolumes() {
    const bgMusic = document.getElementById('backgroundMusic');
    const fruitMusic = document.getElementById('fruitGameMusic');
    const mathMusic = document.getElementById('mathRunnerMusic');
    const scienceMusic = document.getElementById('scienceFightMusic');
    
    bgMusic.volume = gameState.settings.bgMusicVolume / 100;
    fruitMusic.volume = gameState.settings.bgMusicVolume / 100;
    mathMusic.volume = gameState.settings.bgMusicVolume / 100;
    scienceMusic.volume = gameState.settings.bgMusicVolume / 100;
}

function switchMusic(musicType) {
    if (!gameState.musicEnabled) return;
    
    const bgMusic = document.getElementById('backgroundMusic');
    const fruitMusic = document.getElementById('fruitGameMusic');
    const mathMusic = document.getElementById('mathRunnerMusic');
    const scienceMusic = document.getElementById('scienceFightMusic');
    
    // Stop current music
    bgMusic.pause();
    fruitMusic.pause();
    mathMusic.pause();
    scienceMusic.pause();
    bgMusic.currentTime = 0;
    fruitMusic.currentTime = 0;
    mathMusic.currentTime = 0;
    scienceMusic.currentTime = 0;
    gameState.musicPlaying = false;
    
    // Start new music
    gameState.currentMusic = musicType;
    
    if (musicType === 'background') {
        bgMusic.play().then(() => {
            gameState.musicPlaying = true;
            console.log('🎵 Switched to background music');
        }).catch(e => {
            console.warn('⚠️ Could not play background music:', e);
        });
    } else if (musicType === 'fruit') {
        fruitMusic.play().then(() => {
            gameState.musicPlaying = true;
            console.log('🎵 Switched to fruit game music');
        }).catch(e => {
            console.warn('⚠️ Could not play fruit game music:', e);
        });
    } else if (musicType === 'math') {
        mathMusic.play().then(() => {
            gameState.musicPlaying = true;
            console.log('🎵 Switched to math runner music');
        }).catch(e => {
            console.warn('⚠️ Could not play math runner music:', e);
        });
    } else if (musicType === 'science') {
        scienceMusic.play().then(() => {
            gameState.musicPlaying = true;
            console.log('🎵 Switched to science fight music');
        }).catch(e => {
            console.warn('⚠️ Could not play science fight music:', e);
        });
    }
}

function playBackgroundMusic() {
    if (!gameState.musicEnabled) return;
    
    // Auto-start background music
    switchMusic('background');
}

function playMergeSound() {
    if (!gameState.musicEnabled || gameState.settings.sfxVolume === 0) return;
    
    // Randomly select one of the three merge sounds
    const soundIndex = Math.floor(Math.random() * 3) + 1;
    const mergeSound = document.getElementById(`mergeSound${soundIndex}`);
    
    if (mergeSound) {
        // Set volume based on SFX setting
        mergeSound.volume = gameState.settings.sfxVolume / 100;
        
        // Reset sound to beginning and play
        mergeSound.currentTime = 0;
        mergeSound.play().catch(e => {
            console.warn('⚠️ Could not play merge sound:', e);
        });
    }
}

function playVictorySound() {
    if (!gameState.musicEnabled || gameState.settings.sfxVolume === 0) return;
    
    const victorySound = document.getElementById('victorySound');
    
    if (victorySound) {
        // Fade out background music first
        fadeOutBackgroundMusic();
        
        // Set volume based on SFX setting
        victorySound.volume = gameState.settings.sfxVolume / 100;
        
        // Reset sound to beginning and play once
        victorySound.currentTime = 0;
        victorySound.play().catch(e => {
            console.warn('⚠️ Could not play victory sound:', e);
        });
    }
}

function fadeOutBackgroundMusic() {
    const bgMusic = document.getElementById('backgroundMusic');
    const fruitMusic = document.getElementById('fruitGameMusic');
    
    // Get the currently playing music
    const currentMusic = gameState.currentMusic === 'background' ? bgMusic : fruitMusic;
    
    if (currentMusic && !currentMusic.paused) {
        const originalVolume = currentMusic.volume;
        const fadeStep = originalVolume / 30; // Fade out over ~0.5 seconds (30 steps)
        
        const fadeInterval = setInterval(() => {
            if (currentMusic.volume > fadeStep) {
                currentMusic.volume -= fadeStep;
            } else {
                currentMusic.volume = 0;
                currentMusic.pause();
                currentMusic.currentTime = 0;
                gameState.musicPlaying = false;
                clearInterval(fadeInterval);
                
                // Reset volume for next time
                currentMusic.volume = originalVolume;
                console.log('🎵 Background music faded out for victory sound');
            }
        }, 16); // ~60fps for smooth fade
    }
}

function playFruitWorkDropSound() {
    if (!gameState.musicEnabled || gameState.settings.sfxVolume === 0) return;
    
    const fruitWorkSound = document.getElementById('fruitWorkDropSound');
    
    if (fruitWorkSound) {
        // Set volume based on SFX setting
        fruitWorkSound.volume = gameState.settings.sfxVolume / 100;
        
        // Reset sound to beginning and play
        fruitWorkSound.currentTime = 0;
        fruitWorkSound.play().catch(e => {
            console.warn('⚠️ Could not play fruitwork drop sound:', e);
        });
    }
}

function playMathDiamondSparkleSound() {
    if (!gameState.musicEnabled || gameState.settings.sfxVolume === 0) return;
    
    const diamondSparkleSound = document.getElementById('mathDiamondSparkleSound');
    
    if (diamondSparkleSound) {
        // Set volume based on SFX setting
        diamondSparkleSound.volume = gameState.settings.sfxVolume / 100;
        
        // Reset sound to beginning and play
        diamondSparkleSound.currentTime = 0;
        diamondSparkleSound.play().catch(e => {
            console.warn('⚠️ Could not play math diamond sparkle sound:', e);
        });
    }
}

function playScienceBossAttackSound() {
    if (!gameState.musicEnabled || gameState.settings.sfxVolume === 0) return;
    
    const bossAttackSound = document.getElementById('scienceBossAttackSound');
    
    if (bossAttackSound) {
        // Set volume based on SFX setting
        bossAttackSound.volume = gameState.settings.sfxVolume / 100;
        
        // Reset sound to beginning and play
        bossAttackSound.currentTime = 0;
        bossAttackSound.play().catch(e => {
            console.warn('⚠️ Could not play science boss attack sound:', e);
        });
    }
}

function playScienceCorrectSound() {
    if (!gameState.musicEnabled || gameState.settings.sfxVolume === 0) return;
    
    const correctSound = document.getElementById('scienceCorrectSound');
    
    if (correctSound) {
        // Set volume based on SFX setting
        correctSound.volume = gameState.settings.sfxVolume / 100;
        
        // Reset sound to beginning and play
        correctSound.currentTime = 0;
        correctSound.play().catch(e => {
            console.warn('⚠️ Could not play science correct sound:', e);
        });
    }
}

function startMusicWithUserInteraction() {
    // Try to start music immediately with multiple attempts
    const bgMusic = document.getElementById('backgroundMusic');
    bgMusic.volume = gameState.settings.bgMusicVolume / 100;
    
    // Force autoplay with multiple strategies
    const attemptAutoplay = () => {
        // Strategy 1: Direct play
        const playPromise = bgMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('🎵 เพลงเริ่มเล่นอัตโนมัติสำเร็จ!');
                gameState.musicPlaying = true;
                gameState.currentMusic = 'background';
            }).catch(error => {
                console.log('🎵 Strategy 1 failed, trying alternative methods...');
                
                // Strategy 2: Set muted first, then unmute
                bgMusic.muted = true;
                bgMusic.play().then(() => {
                    setTimeout(() => {
                        bgMusic.muted = false;
                        console.log('🎵 เพลงเริ่มเล่นด้วย unmute strategy!');
                        gameState.musicPlaying = true;
                        gameState.currentMusic = 'background';
                    }, 100);
                }).catch(() => {
                    console.log('🎵 All autoplay strategies failed, setting up user interaction fallback');
                    setupUserInteractionFallback();
                });
            });
        }
    };
    
    // Try immediately
    attemptAutoplay();
    
    // Also try after a short delay
    setTimeout(attemptAutoplay, 500);
    setTimeout(attemptAutoplay, 1000);
}

function setupUserInteractionFallback() {
    const startMusicOnClick = () => {
        const bgMusic = document.getElementById('backgroundMusic');
        bgMusic.muted = false;
        bgMusic.play().then(() => {
            console.log('🎵 เพลงเริ่มเล่นหลังจากการคลิก!');
            gameState.musicPlaying = true;
            gameState.currentMusic = 'background';
        });
        document.removeEventListener('click', startMusicOnClick);
        document.removeEventListener('touchstart', startMusicOnClick);
        document.removeEventListener('keydown', startMusicOnClick);
    };
    
    document.addEventListener('click', startMusicOnClick);
    document.addEventListener('touchstart', startMusicOnClick);
    document.addEventListener('keydown', startMusicOnClick);
}

function forceStartMusic() {
    const bgMusic = document.getElementById('backgroundMusic');
    
    // Set volume first
    bgMusic.volume = gameState.settings.bgMusicVolume / 100;
    
    // Reset any previous state
    bgMusic.muted = false;
    bgMusic.currentTime = 0;
    
    console.log('🎵 Attempting to start music with volume:', bgMusic.volume);
    
    // Direct play attempt
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('🎵 เพลงเริ่มเล่นสำเร็จหลังจากแตะ!');
            gameState.musicPlaying = true;
            gameState.currentMusic = 'background';
        }).catch(error => {
            console.log('🎵 Direct play failed, trying muted strategy...', error);
            
            // Fallback: muted then unmuted
            bgMusic.muted = true;
            bgMusic.play().then(() => {
                console.log('🎵 Muted play successful, unmuting...');
                setTimeout(() => {
                    bgMusic.muted = false;
                    console.log('🎵 เพลงเริ่มเล่นด้วย muted strategy!');
                    gameState.musicPlaying = true;
                    gameState.currentMusic = 'background';
                }, 100);
            }).catch(finalError => {
                console.log('🎵 All music strategies failed:', finalError);
                // Set up click listener as final fallback
                setupUserInteractionFallback();
            });
        });
    } else {
        console.log('🎵 Play promise undefined, setting up fallback');
        setupUserInteractionFallback();
    }
}

function pauseAllMusic() {
    const bgMusic = document.getElementById('backgroundMusic');
    const fruitMusic = document.getElementById('fruitGameMusic');
    const mathMusic = document.getElementById('mathRunnerMusic');
    const scienceMusic = document.getElementById('scienceFightMusic');
    
    bgMusic.pause();
    fruitMusic.pause();
    mathMusic.pause();
    scienceMusic.pause();
    gameState.musicPlaying = false;
    console.log('⏸️ All music paused');
}

function resumeCurrentMusic() {
    if (gameState.musicEnabled && !gameState.musicPlaying) {
        switchMusic(gameState.currentMusic);
    }
}

function loadSettings() {
    const savedSettings = localStorage.getItem('pisaGameSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        gameState.settings = { ...gameState.settings, ...settings };
        
        // Update UI sliders
        const bgSlider = document.getElementById('bgMusicVolume');
        const sfxSlider = document.getElementById('sfxVolume');
        
        bgSlider.value = gameState.settings.bgMusicVolume;
        sfxSlider.value = gameState.settings.sfxVolume;
        document.getElementById('bgVolumeValue').textContent = gameState.settings.bgMusicVolume + '%';
        document.getElementById('sfxVolumeValue').textContent = gameState.settings.sfxVolume + '%';
        
        // Update slider backgrounds
        bgSlider.style.background = `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${gameState.settings.bgMusicVolume}%, #E5E7EB ${gameState.settings.bgMusicVolume}%, #E5E7EB 100%)`;
        sfxSlider.style.background = `linear-gradient(to right, #10B981 0%, #10B981 ${gameState.settings.sfxVolume}%, #E5E7EB ${gameState.settings.sfxVolume}%, #E5E7EB 100%)`;
        
        updateMusicVolumes();
    }
}

function saveSettings() {
    localStorage.setItem('pisaGameSettings', JSON.stringify(gameState.settings));
    console.log('💾 Settings saved:', gameState.settings);
}

// Set random background
function setRandomBackground() {
    const backgrounds = isMobile() ? mobileBgs : desktopBgs;
    const loadingBackgrounds = isMobile() ? mobileLoadingBgs : desktopLoadingBgs;
    
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    const randomLoadingBg = loadingBackgrounds[Math.floor(Math.random() * loadingBackgrounds.length)];
    
    document.getElementById('tapToEnterScreen').style.backgroundImage = `url('${randomBg}')`;
    document.getElementById('tapToEnterScreen').style.backgroundSize = 'cover';
    document.getElementById('tapToEnterScreen').style.backgroundPosition = 'center';
    
    document.getElementById('mainMenu').style.backgroundImage = `url('${randomBg}')`;
    document.getElementById('mainMenu').style.backgroundSize = 'cover';
    document.getElementById('mainMenu').style.backgroundPosition = 'center';
    
    document.getElementById('loadingScreen').style.backgroundImage = `url('${randomLoadingBg}')`;
    document.getElementById('loadingScreen').style.backgroundSize = 'cover';
    document.getElementById('loadingScreen').style.backgroundPosition = 'center';
    
    document.getElementById('thaiFruitGame').style.backgroundImage = `url('${randomBg}')`;
    document.getElementById('thaiFruitGame').style.backgroundSize = 'cover';
    document.getElementById('thaiFruitGame').style.backgroundPosition = 'center';
}

// Preload images - โหลดรูปภาพทั้งหมดรวมถึงผลไม้
function preloadImages() {
    console.log('📸 เริ่มโหลดรูปภาพ:', imagesToLoad.length, 'รูป');
    
    // Immediate fallback - go to main menu after 2 seconds
    setTimeout(() => {
        console.log('⚠️ Quick fallback: กำลังไปหน้าหลักทันที...');
        setRandomBackground();
        showScreen('tapToEnterScreen');
        // Don't start music yet - wait for tap
    }, 2000); // 2 second quick fallback
    
    let loadedCount = 0;
    const totalImages = imagesToLoad.length;
    let loadingStarted = false;
    
    // Start loading animation immediately
    const loadingInterval = setInterval(() => {
        if (!loadingStarted) {
            loadingStarted = true;
            let fakeProgress = 0;
            const fakeLoadingInterval = setInterval(() => {
                fakeProgress += Math.random() * 10 + 5;
                if (fakeProgress >= 95) {
                    fakeProgress = 95;
                    clearInterval(fakeLoadingInterval);
                }
                document.getElementById('loadingBar').style.width = fakeProgress + '%';
                document.getElementById('loadingText').textContent = `กำลังโหลด... ${Math.round(fakeProgress)}%`;
            }, 100);
            
            // Complete loading after 1.5 seconds
            setTimeout(() => {
                clearInterval(fakeLoadingInterval);
                document.getElementById('loadingBar').style.width = '100%';
                document.getElementById('loadingText').textContent = 'กำลังโหลด... 100%';
                
                setTimeout(() => {
                    setRandomBackground();
                    showScreen('tapToEnterScreen');
                    // Don't start music yet - wait for tap
                }, 300);
            }, 1500);
        }
    }, 50);
    
    // Load images in background (non-blocking)
    imagesToLoad.forEach(src => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = () => {
            globalImages[src] = img;
            
            // ถ้าเป็นรูปผลไม้ ให้เก็บด้วย name ด้วย
            fruitGame.fruitTypes.forEach(fruit => {
                if (fruit.image === src) {
                    globalImages[fruit.name] = img;
                }
            });
            
            loadedCount++;
            if (loadedCount === totalImages) {
                console.log('✅ โหลดรูปภาพทั้งหมดเสร็จแล้ว:', Object.keys(globalImages).length, 'รูป');
            }
        };
        
        img.onerror = () => {
            console.warn('⚠️ ไม่สามารถโหลดรูปภาพ:', src);
            loadedCount++;
        };
        
        img.src = src;
    });
}

// Show screen
function showScreen(screenName) {
    console.log('🖥️ กำลังแสดงหน้าจอ:', screenName);
    const screens = ['loadingScreen', 'tapToEnterScreen', 'mainMenu', 'settingsScreen', 'classroomCodeScreen', 'teacherDashboard', 'studentSelectionScreen', 'scoreboardScreen', 'mapTour', 'thaiFruitGame', 'mathRunnerGame', 'mathRunnerActualGame', 'scienceFightGame', 'scienceLevelLoading', 'scienceFightActualGame', 'fruitMergeGame'];
    
    try {
        screens.forEach(screen => {
            const element = document.getElementById(screen);
            if (element) {
                element.classList.add('hidden');
            }
        });
        
        const targetScreen = document.getElementById(screenName);
        if (targetScreen) {
            targetScreen.classList.remove('hidden');
            targetScreen.classList.add('fade-in');
            gameState.currentScreen = screenName;
            console.log('✅ แสดงหน้าจอสำเร็จ:', screenName);
        } else {
            console.error('❌ ไม่พบหน้าจอ:', screenName);
        }
    } catch (error) {
        console.error('❌ เกิดข้อผิดพลาดในการแสดงหน้าจอ:', error);
    }
}

// Update map states
function updateMapStates() {
    for (let i = 1; i <= 3; i++) {
        const mapElement = document.getElementById(`map${i}`);
        if (gameState.unlockedMaps.includes(i)) {
            mapElement.classList.add('unlocked');
        } else {
            mapElement.classList.remove('unlocked');
        }
    }
}

// Show map tour with unlock animation
function showMapTourWithUnlock() {
    console.log('🎬 Starting map tour with unlock animation...');
    showScreen('mapTour');
    updateMapStates();
    
    // Start unlock animation sequence immediately
    setTimeout(() => {
        console.log('🎬 Playing unlock animation...');
        playUnlockAnimation();
    }, 300);
}

// Play unlock animation for all maps with focus on Science Fight
function playUnlockAnimation() {
    console.log('🎬 playUnlockAnimation() called');
    
    // Remove any existing animation styles first
    const existingStyle = document.getElementById('unlockAnimationStyles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    const maps = [
        { id: 'map1', name: 'ThaiFruitMerge', delay: 0 },
        { id: 'map2', name: 'Math Runner', delay: 800 },
        { id: 'map3', name: 'Science Fight', delay: 1600 }
    ];
    console.log('🎬 Maps to animate:', maps);
    
    // Add unlock animation styles with unique ID
    const style = document.createElement('style');
    style.id = 'unlockAnimationStyles';
    style.textContent = `
        .unlock-transition {
            animation: unlockTransition 1.5s ease-in-out forwards !important;
            position: relative;
            z-index: 20;
        }
        
        .unlock-checkmark {
            position: absolute;
            top: -15px;
            right: -15px;
            background: linear-gradient(135deg, #10B981, #059669);
            color: white;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: bold;
            box-shadow: 0 6px 20px rgba(16, 185, 129, 0.6);
            z-index: 25;
            animation: checkmarkPop 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            transform: scale(0);
        }
        
        .unlock-focus {
            transform: scale(1.2) !important;
            filter: drop-shadow(0 0 30px #9333EA) drop-shadow(0 0 60px #9333EA) !important;
            animation: focusPulse 2s ease-in-out infinite !important;
            z-index: 15;
            position: relative;
        }
        
        .final-stage-message {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #7C3AED, #A855F7);
            color: white;
            padding: 32px 40px;
            border-radius: 24px;
            box-shadow: 0 25px 50px rgba(124, 58, 237, 0.4);
            z-index: 50;
            text-align: center;
            animation: finalStageAppear 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
            border: 3px solid rgba(255, 255, 255, 0.3);
        }
        
        @keyframes unlockTransition {
            0% { 
                filter: grayscale(100%) brightness(0.3) !important;
                transform: scale(0.95) !important;
            }
            50% { 
                filter: grayscale(50%) brightness(0.8) !important;
                transform: scale(1.1) !important;
            }
            100% { 
                filter: grayscale(0%) brightness(1.1) !important;
                transform: scale(1) !important;
            }
        }
        
        @keyframes checkmarkPop {
            0% { transform: scale(0) rotate(-180deg); }
            60% { transform: scale(1.3) rotate(15deg); }
            100% { transform: scale(1) rotate(0deg); }
        }
        
        @keyframes focusPulse {
            0%, 100% { 
                transform: scale(1.2) !important;
                filter: drop-shadow(0 0 30px #9333EA) drop-shadow(0 0 60px #9333EA) !important;
            }
            50% { 
                transform: scale(1.3) !important;
                filter: drop-shadow(0 0 50px #9333EA) drop-shadow(0 0 100px #9333EA) !important;
            }
        }
        
        @keyframes finalStageAppear {
            0% { 
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.2) rotate(-15deg);
            }
            70% { 
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.15) rotate(3deg);
            }
            100% { 
                opacity: 1;
                transform: translate(-50%, -50%) scale(1) rotate(0deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Animate each map unlock with color transition
    maps.forEach((map, index) => {
        console.log(`🎬 Setting timeout for ${map.name} with delay ${map.delay}ms`);
        setTimeout(() => {
            console.log(`🎬 Animating ${map.name} (${map.id})`);
            const mapElement = document.getElementById(map.id);
            
            if (!mapElement) {
                console.error(`🎬 Map element not found: ${map.id}`);
                return;
            }
            
            console.log(`🎬 Adding unlock-transition to ${map.name}`);
            // Force remove any existing classes first
            mapElement.classList.remove('unlock-transition', 'unlock-focus');
            
            // Add unlock transition animation
            setTimeout(() => {
                mapElement.classList.add('unlock-transition');
            }, 50);
            
            // Add checkmark after transition starts
            setTimeout(() => {
                console.log(`🎬 Adding checkmark to ${map.name}`);
                
                // Remove any existing checkmarks first
                const existingCheckmarks = mapElement.parentElement.querySelectorAll('.unlock-checkmark');
                existingCheckmarks.forEach(mark => mark.remove());
                
                const checkmark = document.createElement('div');
                checkmark.innerHTML = '✓';
                checkmark.className = 'unlock-checkmark';
                
                mapElement.parentElement.style.position = 'relative';
                mapElement.parentElement.appendChild(checkmark);
                
                // Remove checkmark after 4 seconds
                setTimeout(() => {
                    if (checkmark.parentElement) {
                        checkmark.remove();
                    }
                }, 4000);
            }, 600);
            
            // Remove unlock animation class after animation
            setTimeout(() => {
                mapElement.classList.remove('unlock-transition');
            }, 1500);
            
        }, map.delay);
    });
    
    // Show final stage message after Science Fight unlocks
    setTimeout(() => {
        console.log('🎬 Showing final stage message');
        
        // Remove any existing final messages
        const existingMessages = document.querySelectorAll('.final-stage-message');
        existingMessages.forEach(msg => msg.remove());
        
        const finalMessage = document.createElement('div');
        finalMessage.innerHTML = `
            <div class="text-3xl font-bold mb-3">🎉 ยินดีด้วย!</div>
            <div class="text-xl mb-2">คุณได้ปลดล็อคด่านสุดท้ายแล้ว</div>
            <div class="text-lg opacity-90">Science Fight พร้อมให้คุณท้าทาย!</div>
        `;
        finalMessage.className = 'final-stage-message';
        
        document.body.appendChild(finalMessage);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            if (finalMessage.parentElement) {
                finalMessage.style.animation = 'finalStageAppear 0.8s ease-in reverse forwards';
                setTimeout(() => {
                    finalMessage.remove();
                }, 800);
            }
        }, 5000);
        
    }, 2200);
    
    // Focus on Science Fight (Map 3) after all animations
    setTimeout(() => {
        console.log('🎬 Adding focus to Science Fight');
        const scienceMap = document.getElementById('map3');
        if (scienceMap) {
            // Remove any existing focus first
            scienceMap.classList.remove('unlock-focus');
            
            setTimeout(() => {
                scienceMap.classList.add('unlock-focus');
                
                // Remove focus animation after 6 seconds
                setTimeout(() => {
                    scienceMap.classList.remove('unlock-focus');
                }, 6000);
            }, 100);
        }
    }, 3000);
}

// Event listeners
document.getElementById('singlePlayerBtn').addEventListener('click', () => {
    showScreen('mapTour');
    updateMapStates();
    resumeCurrentMusic(); // Resume music when entering game
});

document.getElementById('classroomBtn').addEventListener('click', () => {
    showScreen('classroomCodeScreen');
    // Set background for classroom code screen
    const classroomCodeScreen = document.getElementById('classroomCodeScreen');
    const backgrounds = isMobile() ? mobileBgs : desktopBgs;
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    classroomCodeScreen.style.backgroundImage = `url('${randomBg}')`;
    classroomCodeScreen.style.backgroundSize = 'cover';
    classroomCodeScreen.style.backgroundPosition = 'center';
    resumeCurrentMusic(); // Resume music when entering classroom
});

// Settings button
document.getElementById('settingsBtn').addEventListener('click', () => {
    showScreen('settingsScreen');
    // Set background for settings screen
    const settingsScreen = document.getElementById('settingsScreen');
    const backgrounds = isMobile() ? mobileBgs : desktopBgs;
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    settingsScreen.style.backgroundImage = `url('${randomBg}')`;
    settingsScreen.style.backgroundSize = 'cover';
    settingsScreen.style.backgroundPosition = 'center';
});

document.getElementById('homeBtn').addEventListener('click', () => {
    showScreen('mainMenu');
    resumeCurrentMusic(); // Resume music when going home
});

// Settings screen event listeners
document.getElementById('backToMainFromSettings').addEventListener('click', () => {
    showScreen('mainMenu');
});

document.getElementById('saveSettingsBtn').addEventListener('click', () => {
    saveSettings();
    showScreen('mainMenu');
});

// Volume sliders
document.getElementById('bgMusicVolume').addEventListener('input', (e) => {
    gameState.settings.bgMusicVolume = parseInt(e.target.value);
    document.getElementById('bgVolumeValue').textContent = gameState.settings.bgMusicVolume + '%';
    updateMusicVolumes();
    
    // Update slider background
    const value = e.target.value;
    e.target.style.background = `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`;
});

document.getElementById('sfxVolume').addEventListener('input', (e) => {
    gameState.settings.sfxVolume = parseInt(e.target.value);
    document.getElementById('sfxVolumeValue').textContent = gameState.settings.sfxVolume + '%';
    
    // Update slider background
    const value = e.target.value;
    e.target.style.background = `linear-gradient(to right, #10B981 0%, #10B981 ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`;
});

// Test sound button
document.getElementById('testSoundBtn').addEventListener('click', () => {
    // Play a short test of current music
    if (gameState.musicEnabled) {
        const currentMusicElement = gameState.currentMusic === 'background' ? 
            document.getElementById('backgroundMusic') : 
            document.getElementById('fruitGameMusic');
        
        currentMusicElement.currentTime = 0;
        currentMusicElement.play().then(() => {
            setTimeout(() => {
                currentMusicElement.pause();
                currentMusicElement.currentTime = 0;
                // Resume normal music
                resumeCurrentMusic();
            }, 3000); // Play for 3 seconds
        });
    }
});

document.getElementById('nextMapBtn').addEventListener('click', () => {
    // Check if Science Fight is unlocked
    if (gameState.unlockedMaps.includes(3)) {
        // Go directly to Science Fight if unlocked
        const scienceFightGame = document.getElementById('scienceFightGame');
        const scienceBg = isMobile() ? 
            'https://i.ibb.co/NdZjYhF4/mbg1.png' :
            'https://i.ibb.co/svpmkphw/pcbg1.png';
        
        scienceFightGame.style.backgroundImage = `url('${scienceBg}')`;
        scienceFightGame.style.backgroundSize = 'cover';
        scienceFightGame.style.backgroundPosition = 'center';
        
        showScreen('scienceFightGame');
        resumeCurrentMusic(); // Resume music when entering Science Fight
    } else {
        // Go to ThaiFruitMerge if Science Fight not unlocked
        showScreen('thaiFruitGame');
        resumeCurrentMusic(); // Resume music when entering game
    }
});

document.getElementById('map1').addEventListener('click', () => {
    if (gameState.unlockedMaps.includes(1)) {
        // Update UI for classroom mode
        if (gameState.isStudent) {
            document.getElementById('playerNameSection').classList.add('hidden');
            document.getElementById('studentNameDisplay').classList.remove('hidden');
            document.getElementById('displayStudentName').textContent = gameState.playerName;
        } else {
            document.getElementById('playerNameSection').classList.remove('hidden');
            document.getElementById('studentNameDisplay').classList.add('hidden');
        }
        
        showScreen('thaiFruitGame');
        resumeCurrentMusic(); // Resume music when entering game
    }
});



document.getElementById('map3').addEventListener('click', () => {
    if (gameState.unlockedMaps.includes(3)) {
        // Set background for Science Fight name input screen
        const scienceFightGame = document.getElementById('scienceFightGame');
        const scienceBg = isMobile() ? 
            'https://i.ibb.co/NdZjYhF4/mbg1.png' :
            'https://i.ibb.co/svpmkphw/pcbg1.png';
        
        scienceFightGame.style.backgroundImage = `url('${scienceBg}')`;
        scienceFightGame.style.backgroundSize = 'cover';
        scienceFightGame.style.backgroundPosition = 'center';
        
        showScreen('scienceFightGame');
        resumeCurrentMusic(); // Resume current music when entering Science Fight
    } else {
        alert('คุณต้องผ่านด่านก่อนหน้าก่อน! 🔒');
    }
});

document.getElementById('backToMainBtn').addEventListener('click', () => {
    // Clear player name when going back to main menu
    document.getElementById('playerName').value = '';
    showScreen('mainMenu');
    resumeBackgroundMusic(); // Resume music when going back
});

// Classroom code screen event listeners
document.getElementById('backToMainFromCode').addEventListener('click', () => {
    document.getElementById('classroomCode').value = '';
    showScreen('mainMenu');
    resumeBackgroundMusic(); // Resume music when going back
});

document.getElementById('classroomCode').addEventListener('input', (e) => {
    const submitBtn = document.getElementById('submitCodeBtn');
    if (e.target.value.trim()) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
});

document.getElementById('submitCodeBtn').addEventListener('click', () => {
    const code = document.getElementById('classroomCode').value.trim();
    if (code === 'pisateachermode') {
        // Teacher mode - create classroom
        createClassroom();
    } else if (code === 'devtestmap') {
        // Unlock all maps
        gameState.unlockedMaps = [1, 2, 3];
        alert('🔓 ปลดล็อคทุกแมพแล้ว! คุณสามารถเล่นแมพไหนก่อนก็ได้');
        showScreen('mapTour');
        updateMapStates();
        resumeBackgroundMusic(); // Resume music when entering map tour
    } else if (code !== '') {
        // Student mode - join classroom
        joinClassroom(code);
    }
});

// Reset input styling when user starts typing again
document.getElementById('classroomCode').addEventListener('input', () => {
    const codeInput = document.getElementById('classroomCode');
    codeInput.classList.remove('border-red-500', 'border-green-500');
    codeInput.classList.add('border-amber-300');
    hideCodeError();
});

// Allow Enter key to submit code
document.getElementById('classroomCode').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('submitCodeBtn').click();
    }
});

// Math Runner event listeners
document.getElementById('backToMainFromMath').addEventListener('click', () => {
    document.getElementById('mathPlayerName').value = '';
    showScreen('mainMenu');
    switchMusic('background'); // Switch back to background music
});

document.getElementById('mathPlayerName').addEventListener('input', (e) => {
    const startBtn = document.getElementById('startMathGameBtn');
    if (e.target.value.trim()) {
        startBtn.disabled = false;
        startBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
        startBtn.disabled = true;
        startBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
});

document.getElementById('startMathGameBtn').addEventListener('click', () => {
    let playerName;
    
    if (gameState.isStudent) {
        // Use selected student name for classroom mode
        playerName = gameState.playerName;
    } else {
        // Use input field for single player mode
        playerName = document.getElementById('mathPlayerName').value.trim();
        if (!playerName) return;
        gameState.playerName = playerName;
    }
    
    // Check for developer mode
    if (playerName === 'devmode1') {
        mathGame.devMode = true;
        console.log('🔧 Math Runner Developer Mode Activated!');
    } else {
        mathGame.devMode = false;
    }
    
    showScreen('mathRunnerActualGame');
    initMathRunnerGame();
    switchMusic('math'); // Switch to Math Runner music
});

// Science Fight event listeners
document.getElementById('backToMainFromScience').addEventListener('click', () => {
    document.getElementById('sciencePlayerName').value = '';
    showScreen('mainMenu');
    switchMusic('background'); // Switch back to background music
});

document.getElementById('sciencePlayerName').addEventListener('input', (e) => {
    const startBtn = document.getElementById('startScienceGameBtn');
    if (e.target.value.trim()) {
        startBtn.disabled = false;
        startBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
        startBtn.disabled = true;
        startBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
});

document.getElementById('startScienceGameBtn').addEventListener('click', () => {
    let playerName;
    
    if (gameState.isStudent) {
        // Use selected student name for classroom mode
        playerName = gameState.playerName;
    } else {
        // Use input field for single player mode
        playerName = document.getElementById('sciencePlayerName').value.trim();
        if (!playerName) return;
        gameState.playerName = playerName;
    }
    
    showScreen('scienceFightActualGame');
    initScienceFightGame();
    switchMusic('science'); // Switch to Science Fight music
});

// Set Math Runner game screen background
document.getElementById('map2').addEventListener('click', () => {
    if (gameState.unlockedMaps.includes(2)) {
        // Update UI for classroom mode
        if (gameState.isStudent) {
            document.getElementById('mathPlayerNameSection').classList.add('hidden');
            document.getElementById('mathStudentNameDisplay').classList.remove('hidden');
            document.getElementById('displayMathStudentName').textContent = gameState.playerName;
        } else {
            document.getElementById('mathPlayerNameSection').classList.remove('hidden');
            document.getElementById('mathStudentNameDisplay').classList.add('hidden');
        }
        
        // Set background for Math Runner name input screen
        const mathRunnerGame = document.getElementById('mathRunnerGame');
        const mathBgs = isMobile() ? 
            ['https://i.ibb.co/xS8bqrxs/mbg1.jpg', 'https://i.ibb.co/spnx9BPb/mbg2.jpg', 'https://i.ibb.co/nssmJSyF/mbg3.jpg', 'https://i.ibb.co/Z6qxWMr8/mbg4.jpg'] :
            ['https://i.ibb.co/spB14Y3H/bg.jpg', 'https://i.ibb.co/ZRx4YLYy/bg2.jpg', 'https://i.ibb.co/bjdFvp1c/bg3.jpg', 'https://i.ibb.co/tP3TM57Z/bg4.jpg'];
        
        const randomBg = mathBgs[Math.floor(Math.random() * mathBgs.length)];
        mathRunnerGame.style.backgroundImage = `url('${randomBg}')`;
        mathRunnerGame.style.backgroundSize = 'cover';
        mathRunnerGame.style.backgroundPosition = 'center';
        
        showScreen('mathRunnerGame');
        resumeBackgroundMusic(); // Resume music when entering Math Runner
    } else {
        alert('คุณต้องผ่านด่านก่อนหน้าก่อน! 🔒');
    }
});

document.getElementById('playerName').addEventListener('input', (e) => {
    const startBtn = document.getElementById('startGameBtn');
    if (e.target.value.trim()) {
        startBtn.disabled = false;
        startBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
        startBtn.disabled = true;
        startBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
});

document.getElementById('startGameBtn').addEventListener('click', () => {
    let playerName;
    
    if (gameState.isStudent) {
        // Use selected student name for classroom mode
        playerName = gameState.playerName;
    } else {
        // Use input field for single player mode
        playerName = document.getElementById('playerName').value.trim();
        if (!playerName) return;
        gameState.playerName = playerName;
    }
    
    // Check for developer mode
    if (playerName === 'devmode1') {
        fruitGame.devMode = true;
        fruitGame.devFruitType = -1; // -1 means random (normal mode)
        console.log('🔧 Developer Mode Activated!');
    } else {
        fruitGame.devMode = false;
    }
    
    // Update student status if in classroom mode
    if (gameState.isStudent) {
        updateStudentStatus(gameState.playerName, 'playing-thai');
    }
    
    showScreen('fruitMergeGame');
    initFruitMergeGame();
    switchMusic('fruit'); // Switch to fruit game music
});

// Handle window resize
window.addEventListener('resize', () => {
    setRandomBackground();
    // ปรับขนาดเกมใหม่เมื่อหน้าจอเปลี่ยนขนาด
    if (gameState.currentScreen === 'fruitMergeGame') {
        adjustGameSize();
    }
    // ปรับขนาด Math Runner canvas เมื่อหน้าจอเปลี่ยนขนาด
    if (gameState.currentScreen === 'mathRunnerActualGame' && mathGame.canvas) {
        mathGame.canvas.width = window.innerWidth;
        mathGame.canvas.height = window.innerHeight;
        mathGame.canvas.style.width = '100vw';
        mathGame.canvas.style.height = '100vh';
        updatePlayerPosition();
        console.log('🎮 Canvas resized to:', mathGame.canvas.width, 'x', mathGame.canvas.height);
    }
});

// Global image storage - เก็บรูปภาพทั้งหมดที่โหลดแล้ว
let globalImages = {};

// ThaiFruitMerge Game Logic
let fruitGame = {
    canvas: null,
    ctx: null,
    fruits: [],
    currentFruit: null,
    nextFruitType: 0,
    score: 0,
    diamonds: 0,
    gameRunning: false,
    isDragging: false,
    mouseX: 235,
    particles: [],
    canDrop: true,
    gameWidth: 470,
    gameHeight: 780,
    dangerLine: 160,
    
    // Developer mode variables
    devMode: false,
    devFruitType: -1, // -1 = random, 0-11 = specific fruit type
    devMenuOpen: false,
    
    // Fruit collection progress
    fruitCollection: {
        mango: 0,      // ต้องรวม 200 เพื่อปลดล็อคข้อ 1
        pineapple: 0,  // ต้องรวม 500 เพื่อปลดล็อคข้อ 2  
        coconut: 0,    // ต้องรวม 800 เพื่อปลดล็อคข้อ 3
        melon: 0,      // ต้องรวม 1200 เพื่อปลดล็อคข้อ 4
        watermelon: 0  // ต้องรวม 1000 เพื่อปลดล็อคข้อ 5
    },
    
    questionsCompleted: 0,
    currentQuestionIndex: 0,
    selectedAnswer: null,
    forceFruitWork: false,
    correctAnswers: 0, // Track correct answers
    
    fruitTypes: [
        { name: 'banana', image: 'https://i.ibb.co/JRLcPzTt/banana.png', size: 60 },
        { name: 'mango', image: 'https://i.ibb.co/Ng15M3C3/mango.png', size: 60 },
        { name: 'pineapple', image: 'https://i.ibb.co/C5vDhBvd/pineapple.png', size: 70 },
        { name: 'coconut', image: 'https://i.ibb.co/jkZZ5xNS/coconut.png', size: 90 },
        { name: 'melon', image: 'https://i.ibb.co/hJrTKCND/melon.png', size: 100 },
        { name: 'watermelon', image: 'https://i.ibb.co/dw2g7G4S/watermelon.png', size: 120 },
        { name: 'durian', image: 'https://i.ibb.co/qFn35vNM/durian.png', size: 130 },
        { name: 'victory', image: 'https://i.ibb.co/kp03phJ/victory.png', size: 140 },
        { name: 'fruitWork', image: 'https://i.ibb.co/Vczc8s0N/fruit-Work.png', size: 80 },
        { name: 'diamond1', image: 'https://i.ibb.co/CpcsXpMx/diamond1.png', size: 140 },
        { name: 'diamond2', image: 'https://i.ibb.co/39tCZbzW/diamond2.png', size: 150 },
        { name: 'diamond3', image: 'https://i.ibb.co/jZJDQ9qB/diamond3.png', size: 150 }
    ],
    
    loadedImages: {}, // จะใช้รูปจาก globalImages แทน
    availableTypes: 3 // เริ่มต้นด้วย 3 ชนิดแรก
};

// Questions data
const questions = [
    {
        question: "ถ้อยคำใดในบทความมีน้ำหนักทางอารมณ์มากที่สุด",
        options: [
            "ก. แหล่งเรียนรู้",
            "ข. ถูกยึดครอง", 
            "ค. ภูมิปัญญา",
            "ง. ความยั่งยืน"
        ],
        correct: 1, // ข
        requirement: "mango",
        target: 200
    },
    {
        question: 'คำว่า "ข้อพิพาท" ในบทความนี้หมายถึงอะไร',
        options: [
            "ก. การโต้เถียงในวงการวิชาการ",
            "ข. ความขัดแย้งทางดินแดนระหว่างประเทศ",
            "ค. การศึกษาเรื่องโบราณสถาน", 
            "ง. การอนุรักษ์ธรรมชาติ"
        ],
        correct: 1, // ข
        requirement: "pineapple",
        target: 500
    },
    {
        question: "จากบทความเรื่อง ข้อพิพาทที่สอนเรามากกว่าประวัติศาสตร์ ผู้เขียนคิดว่าการใช้คำพูดที่แตกต่างกันเกี่ยวกับโบราณสถานมีผลต่ออะไร",
        options: [
            "ก. ความเข้าใจในประวัติศาสตร์",
            "ข. ความรู้สึกและอารมณ์ของผู้คน",
            "ค. การอนุรักษ์พื้นที่",
            "ง. การกำหนดขนาดพื้นที่"
        ],
        correct: 1, // ข
        requirement: "coconut", 
        target: 800
    },
    {
        question: "ผู้เขียนมองว่าการศึกษาเรื่องข้อพิพาทปราสาทชายแดนควรบูรณาการเฉพาะประวัติศาสตร์เท่านั้น",
        options: [
            "ก. ใช่",
            "ข. ไม่ใช่"
        ],
        correct: 1, // ข
        requirement: "melon",
        target: 1200
    },
    {
        question: "ข้อพิพาทระหว่างไทยกับกัมพูชาให้หลักฐานทั้งประวัติศาสตร์ แผนที่ และการวิเคราะห์ภาษาในการอ้างสิทธิ์",
        options: [
            "ก. ใช่", 
            "ข. ไม่ใช่"
        ],
        correct: 0, // ก
        requirement: "watermelon",
        target: 1000
    }
];

function initFruitMergeGame() {
    // ปรับขนาดเกมตามขนาดหน้าจอ
    adjustGameSize();
    
    // Set game background - ขยายเต็มจอ
    const fruitMergeGame = document.getElementById('fruitMergeGame');
    if (isMobile()) {
        fruitMergeGame.style.backgroundImage = "url('https://i.ibb.co/JWJQkQcp/Thai-Fruit-Merge-MB.png')";
    } else {
        fruitMergeGame.style.backgroundImage = "url('https://i.ibb.co/xKsgF19h/Thai-Fruit-Merge-PC.png')";
    }
    fruitMergeGame.style.backgroundSize = 'cover';
    fruitMergeGame.style.backgroundPosition = 'center';
    fruitMergeGame.style.backgroundRepeat = 'no-repeat';
    
    // Show developer button if in dev mode
    if (fruitGame.devMode) {
        document.getElementById('devBtn').classList.remove('hidden');
        console.log('🔧 Developer button enabled');
    }
    
    // Initialize canvas
    fruitGame.canvas = document.getElementById('gameCanvas');
    fruitGame.ctx = fruitGame.canvas.getContext('2d');
    
    // Load fruit images
    loadFruitImages();
    
    // Reset game state
    resetFruitGame();
    
    // Start game loop
    fruitGame.gameRunning = true;
    gameLoop();
    
    // Add event listeners
    addFruitGameEventListeners();
    initDevEventListeners();
}

function loadFruitImages() {
    // ใช้รูปภาพที่โหลดไว้แล้วจาก globalImages
    fruitGame.fruitTypes.forEach(fruit => {
        // ลองหาจาก URL ก่อน
        if (globalImages[fruit.image]) {
            fruitGame.loadedImages[fruit.name] = globalImages[fruit.image];
        } else if (globalImages[fruit.name]) {
            fruitGame.loadedImages[fruit.name] = globalImages[fruit.name];
        } else {
            console.warn(`⚠️ ไม่พบรูปผลไม้ที่โหลดไว้:`, fruit.name, fruit.image);
            // สร้างรูปใหม่ถ้าไม่พบ
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => {
                fruitGame.loadedImages[fruit.name] = img;
                globalImages[fruit.name] = img;
                console.log('✅ โหลดรูปผลไม้เพิ่มเติม:', fruit.name);
            };
            img.src = fruit.image;
        }
    });
    
    console.log('✅ ใช้รูปผลไม้ที่โหลดไว้แล้ว:', Object.keys(fruitGame.loadedImages).length, 'ชนิด');
    
    // อัพเดต display ทันที
    setTimeout(() => {
        updateCurrentFruitDisplay();
        updateNextFruitPreview();
    }, 100);
}

function resetFruitGame() {
    fruitGame.fruits = [];
    fruitGame.score = 0;
    fruitGame.diamonds = 0;
    fruitGame.particles = [];
    fruitGame.currentFruit = null;
    fruitGame.availableTypes = 3;
    fruitGame.canDrop = true;
    fruitGame.isDragging = false;
    fruitGame.nextFruitType = Math.floor(Math.random() * fruitGame.availableTypes);
    
    // Reset fruit collection progress
    fruitGame.fruitCollection = {
        mango: 0,
        pineapple: 0,
        coconut: 0,
        melon: 0,
        watermelon: 0
    };
    
    fruitGame.questionsCompleted = 0;
    fruitGame.currentQuestionIndex = 0;
    fruitGame.selectedAnswer = null;
    fruitGame.forceFruitWork = false;
    fruitGame.correctAnswers = 0;
    
    // ซ่อน guide line และ current fruit display
    document.getElementById('dropGuideLine').classList.add('hidden');
    document.getElementById('currentFruit').style.display = 'none';
    
    updateScore();
    updateDiamonds();
    updateQuestionsCompleted();
    updateFruitCollectionProgress();
    generateNextFruit();
    updateNextFruitPreview();
}

function updateDiamonds() {
    document.getElementById('gameDiamonds').textContent = fruitGame.diamonds;
}

function updateQuestionsCompleted() {
    document.getElementById('questionsCompleted').textContent = fruitGame.questionsCompleted;
}

function updateFruitCollectionProgress() {
    // Update current progress bar
    const currentQuestion = questions[fruitGame.questionsCompleted];
    if (currentQuestion) {
        const requirement = currentQuestion.requirement;
        const target = currentQuestion.target;
        const current = fruitGame.fruitCollection[requirement];
        
        // Update progress bar
        const percentage = Math.min(100, (current / target) * 100);
        document.getElementById('progressBar').style.width = percentage + '%';
        document.getElementById('currentCount').textContent = current;
        document.getElementById('currentTarget').textContent = target;
        
        // Update current progress icon with actual fruit images
        const fruitImages = {
            mango: 'https://i.ibb.co/Ng15M3C3/mango.png',
            pineapple: 'https://i.ibb.co/C5vDhBvd/pineapple.png', 
            coconut: 'https://i.ibb.co/jkZZ5xNS/coconut.png',
            melon: 'https://i.ibb.co/hJrTKCND/melon.png',
            watermelon: 'https://i.ibb.co/dw2g7G4S/watermelon.png'
        };
        
        const gradients = {
            mango: 'from-orange-400 to-orange-600',
            pineapple: 'from-yellow-400 to-yellow-600',
            coconut: 'from-amber-600 to-amber-800',
            melon: 'from-green-400 to-green-600', 
            watermelon: 'from-red-400 to-red-600'
        };
        
        // Set fruit image
        const fruitIconDiv = document.getElementById('currentFruitIcon');
        fruitIconDiv.innerHTML = `<img src="${fruitImages[requirement]}" style="width: 100%; height: 100%; object-fit: contain;">`;
        
        document.getElementById('progressBar').className = `bg-gradient-to-r ${gradients[requirement]} h-2 rounded-full transition-all duration-300`;
    }
}

// Hamburger menu functions
function toggleHamburgerMenu() {
    const menu = document.getElementById('hamburgerMenu');
    menu.classList.toggle('hidden');
    
    // Update volume sliders when menu opens
    if (!menu.classList.contains('hidden')) {
        updateGameMenuVolumeSliders();
    }
}

function closeHamburgerMenu() {
    document.getElementById('hamburgerMenu').classList.add('hidden');
}

function updateGameMenuVolumeSliders() {
    // Update game menu volume sliders to match current settings
    const gameBgSlider = document.getElementById('gameBgMusicVolume');
    const gameSfxSlider = document.getElementById('gameSfxVolume');
    
    gameBgSlider.value = gameState.settings.bgMusicVolume;
    gameSfxSlider.value = gameState.settings.sfxVolume;
    
    document.getElementById('gameBgVolumeValue').textContent = gameState.settings.bgMusicVolume + '%';
    document.getElementById('gameSfxVolumeValue').textContent = gameState.settings.sfxVolume + '%';
    
    // Update slider backgrounds
    gameBgSlider.style.background = `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${gameState.settings.bgMusicVolume}%, #E5E7EB ${gameState.settings.bgMusicVolume}%, #E5E7EB 100%)`;
    gameSfxSlider.style.background = `linear-gradient(to right, #10B981 0%, #10B981 ${gameState.settings.sfxVolume}%, #E5E7EB ${gameState.settings.sfxVolume}%, #E5E7EB 100%)`;
}

// Question modal functions
function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    if (!question) return;
    
    document.getElementById('questionNumber').textContent = questionIndex + 1;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('questionOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white border-2 sm:border-3 border-gray-200 rounded-xl sm:rounded-2xl hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-102';
        optionDiv.innerHTML = `
            <input type="radio" name="answer" value="${index}" id="option${index}" class="w-4 h-4 sm:w-5 sm:h-5 text-blue-600">
            <label for="option${index}" class="flex-1 cursor-pointer text-gray-800 font-medium text-sm sm:text-lg">${option}</label>
        `;
        
        optionDiv.addEventListener('click', () => {
            // Clear previous selections
            document.querySelectorAll('input[name="answer"]').forEach(input => {
                input.checked = false;
                input.parentElement.classList.remove('border-green-500', 'bg-green-50', 'shadow-xl');
                input.parentElement.classList.add('border-gray-200', 'bg-white');
            });
            
            // Select current option
            const radio = optionDiv.querySelector('input[type="radio"]');
            radio.checked = true;
            optionDiv.classList.remove('border-gray-200', 'bg-white');
            optionDiv.classList.add('border-green-500', 'bg-green-50', 'shadow-xl');
            
            fruitGame.selectedAnswer = index;
            document.getElementById('submitAnswer').disabled = false;
            document.getElementById('submitAnswer').classList.remove('opacity-50', 'cursor-not-allowed');
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    fruitGame.selectedAnswer = null;
    document.getElementById('submitAnswer').disabled = true;
    document.getElementById('submitAnswer').classList.add('opacity-50', 'cursor-not-allowed');
    
    document.getElementById('questionModal').classList.remove('hidden');
}

function submitAnswer() {
    if (fruitGame.selectedAnswer === null) return;
    
    const question = questions[fruitGame.currentQuestionIndex];
    const isCorrect = fruitGame.selectedAnswer === question.correct;
    
    // Track correct answers
    if (isCorrect) {
        fruitGame.correctAnswers++;
    }
    
    // Close question modal
    document.getElementById('questionModal').classList.add('hidden');
    
    // Update questions completed
    fruitGame.questionsCompleted++;
    fruitGame.currentQuestionIndex++;
    updateQuestionsCompleted();
    
    // Set next fruit to be fruit work - force it to be fruit work only
    fruitGame.nextFruitType = fruitGame.fruitTypes.findIndex(f => f.name === 'fruitWork');
    fruitGame.forceFruitWork = true; // Flag to ensure next fruit is fruit work
    updateNextFruitPreview();
    
    // Update progress display for next question
    updateFruitCollectionProgress();
    
    // Check if all questions completed
    if (fruitGame.questionsCompleted >= 5) {
        setTimeout(() => {
            showFinalSummary();
        }, 2000);
    }
}



function showFinalSummary() {
    document.getElementById('summaryScore').textContent = fruitGame.score;
    document.getElementById('summaryDiamonds').textContent = fruitGame.diamonds;
    document.getElementById('summaryCorrectAnswers').textContent = `${fruitGame.correctAnswers}/5`;
    
    // ✅ Show player name on ThaiFruitMerge summary (supports both IDs)
    const playerNameToShow = (gameState && gameState.playerName ? gameState.playerName : 'ผู้เล่น');
    const nameEl1 = document.getElementById('displayPlayerNameMap1');
    const nameElLegacy = document.getElementById('displayStudentNameMap1');
    if (nameEl1) nameEl1.textContent = `ผู้เล่น: ${playerNameToShow}`;
    if (nameElLegacy) nameElLegacy.textContent = `ผู้เล่น: ${playerNameToShow}`;

    document.getElementById('finalSummaryModal').classList.remove('hidden');
    
    // Play victory sound when summary appears
    playVictorySound();
}

function generateNextFruit() {
    if (!fruitGame.canDrop) return;
    
    const fruitSize = fruitGame.fruitTypes[fruitGame.nextFruitType].size;
    const fruitRadius = fruitSize / 2;
    
    // วางผลไม้ที่ตำแหน่งตรงกลางพื้นที่เกม และเหนือเส้นแดงมากขึ้น
    // ปรับตำแหน่งให้เหมาะกับมือถือ - ลดระยะห่างจากเส้นแดง
    const mobileOffset = isMobile() ? 30 : 40;
    const dropY = Math.max(fruitRadius + 10, fruitGame.dangerLine - fruitRadius - mobileOffset);
    
    // คำนวณมวลจากขนาดผลไม้ (ยิ่งใหญ่ยิ่งหนัก)
    const mass = calculateMass(fruitSize);
    
    fruitGame.currentFruit = {
        type: fruitGame.nextFruitType,
        x: fruitGame.gameWidth / 2, // ตรงกลางพื้นที่เกม
        y: dropY,
        vx: 0,
        vy: 0,
        size: fruitSize,
        mass: mass,
        dropped: false,
        merging: false,
        glowEffect: 0,
        settled: false,
        isDropping: false, // เพิ่มสถานะการปล่อย
        settleTimer: 0 // ตัวจับเวลาสำหรับการหยุดนิ่ง
    };
    
    // อัพเดตชนิดผลไม้ที่สามารถใช้ได้
    updateAvailableTypes();
    
    // Generate next fruit (skip if it's fruit work)
    if (fruitGame.nextFruitType !== fruitGame.fruitTypes.findIndex(f => f.name === 'fruitWork')) {
        // Developer mode: use selected fruit type or random
        if (fruitGame.devMode && fruitGame.devFruitType >= 0) {
            fruitGame.nextFruitType = fruitGame.devFruitType;
        } else {
            fruitGame.nextFruitType = Math.floor(Math.random() * Math.min(fruitGame.availableTypes, 5));
        }
    }
    updateNextFruitPreview();
    updateCurrentFruitDisplay();
}

// คำนวณมวลจากขนาดผลไม้
function calculateMass(size) {
    // มวลเพิ่มขึ้นตามพื้นที่ (size^2) แต่ปรับให้เหมาะสมกับเกม
    return Math.pow(size / 60, 2) * 10; // ผลไม้ขนาด 60 จะมีมวล 10
}

function updateAvailableTypes() {
    // เพิ่มชนิดผลไม้ที่สามารถใช้ได้ตามจำนวนผลไม้ที่มี
    const maxAvailable = Math.min(5, 3 + Math.floor(fruitGame.fruits.length / 10));
    fruitGame.availableTypes = Math.max(fruitGame.availableTypes, maxAvailable);
}

function updateCurrentFruitDisplay() {
    const currentFruitDiv = document.getElementById('currentFruit');
    if (fruitGame.currentFruit && !fruitGame.currentFruit.dropped) {
        const fruit = fruitGame.fruitTypes[fruitGame.currentFruit.type];
        const img = fruitGame.loadedImages[fruit.name];
        
        // ใช้รูปที่โหลดไว้แล้ว
        if (img && img.complete) {
            currentFruitDiv.innerHTML = `<img src="${fruit.image}" style="width: ${fruit.size}px; height: ${fruit.size}px; pointer-events: none; display: block;">`;
        } else {
            // ถ้าไม่มีรูป ใช้ emoji แทน
            const fruitEmojis = ['🍌', '🥭', '🍍', '🥥', '🍈', '🍉', '🥭', '🏆', '💼', '💎', '💎', '💎'];
            currentFruitDiv.innerHTML = `<div style="font-size: ${fruit.size * 0.8}px; line-height: 1; pointer-events: none; display: flex; align-items: center; justify-content: center; width: ${fruit.size}px; height: ${fruit.size}px;">${fruitEmojis[fruitGame.currentFruit.type] || '🍎'}</div>`;
        }
        
        // ปรับให้ผลไม้อยู่ตรงกลางเส้น drop line อย่างแม่นยำ
        currentFruitDiv.style.left = fruitGame.currentFruit.x + 'px';
        currentFruitDiv.style.top = fruitGame.currentFruit.y + 'px';
        currentFruitDiv.style.transform = 'translate(-50%, -50%)'; // จัดให้อยู่ตรงกลาง
        currentFruitDiv.style.display = 'block';
        currentFruitDiv.style.position = 'absolute';
        currentFruitDiv.style.zIndex = '25';
        currentFruitDiv.style.pointerEvents = 'none';
    } else {
        currentFruitDiv.style.display = 'none';
    }
}

function updateNextFruitPreview() {
    const preview = document.getElementById('nextFruitPreview');
    const fruit = fruitGame.fruitTypes[fruitGame.nextFruitType];
    const img = fruitGame.loadedImages[fruit.name];
    
    // ใช้รูปที่โหลดไว้แล้ว
    if (img && img.complete) {
        preview.innerHTML = `<img src="${fruit.image}" style="width: 100%; height: 100%; object-fit: contain; display: block;">`;
    } else {
        // ถ้าไม่มีรูป ใช้ emoji แทน
        const fruitEmojis = ['🍌', '🥭', '🍍', '🥥', '🍈', '🍉', '🥭', '🏆', '💼', '💎', '💎', '💎'];
        const fontSize = isMobile() ? '20px' : '24px';
        preview.innerHTML = `<div style="font-size: ${fontSize}; line-height: 1; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">${fruitEmojis[fruitGame.nextFruitType] || '🍎'}</div>`;
    }
}

function updateScore() {
    document.getElementById('gameScore').textContent = fruitGame.score;
}

// Global variable to track if event listeners are added
let fruitGameListenersAdded = false;

function addFruitGameEventListeners() {
    // Remove existing listeners first to prevent duplicates
    removeFruitGameEventListeners();
    
    const gameContainer = document.getElementById('gameContainer');
    
    // ===== ระบบลากผลไม้ไปซ้ายขวา - Mouse Events =====
    gameContainer.addEventListener('mousedown', startDrag);
    gameContainer.addEventListener('mousemove', drag);
    gameContainer.addEventListener('mouseup', endDrag);
    
    // ===== ระบบลากผลไม้ไปซ้ายขวา - Touch Events (สำหรับมือถือ) =====
    gameContainer.addEventListener('touchstart', handleTouchStart, { passive: false });
    gameContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
    gameContainer.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    // Hamburger menu - รองรับทั้ง click และ touch
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    hamburgerBtn.addEventListener('click', handleHamburgerClick);
    hamburgerBtn.addEventListener('touchend', handleHamburgerTouch);
    
    fruitGameListenersAdded = true;
}

// Function to remove existing event listeners
function removeFruitGameEventListeners() {
    if (!fruitGameListenersAdded) return;
    
    const gameContainer = document.getElementById('gameContainer');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    
    // Remove game container listeners
    gameContainer.removeEventListener('mousedown', startDrag);
    gameContainer.removeEventListener('mousemove', drag);
    gameContainer.removeEventListener('mouseup', endDrag);
    gameContainer.removeEventListener('touchstart', handleTouchStart);
    gameContainer.removeEventListener('touchmove', handleTouchMove);
    gameContainer.removeEventListener('touchend', handleTouchEnd);
    
    // Remove hamburger button listeners
    hamburgerBtn.removeEventListener('click', handleHamburgerClick);
    hamburgerBtn.removeEventListener('touchend', handleHamburgerTouch);
    
    fruitGameListenersAdded = false;
}

// Event handler functions
function handleTouchStart(e) {
    // ตรวจสอบว่าแตะที่ปุ่มเมนูหรือไม่
    if (e.target.closest('#hamburgerBtn') || e.target.closest('#hamburgerMenu') || 
        e.target.closest('#devBtn') || e.target.closest('#devMenuModal')) {
        return; // ไม่ป้องกัน default และไม่เริ่ม drag
    }
    
    e.preventDefault();
    const touch = e.touches[0];
    startDragTouch(touch);
}

function handleTouchMove(e) {
    if (fruitGame.isDragging) {
        e.preventDefault();
        const touch = e.touches[0];
        dragTouch(touch);
    }
}

function handleTouchEnd(e) {
    if (fruitGame.isDragging) {
        e.preventDefault();
        endDrag();
    }
}

function handleHamburgerClick(e) {
    e.stopPropagation();
    e.preventDefault();
    toggleHamburgerMenu();
}

function handleHamburgerTouch(e) {
    e.stopPropagation();
    e.preventDefault();
    toggleHamburgerMenu();
}

// Initialize menu event listeners once
function initMenuEventListeners() {
    // Close menu button
    document.getElementById('closeMenuBtn').addEventListener('click', () => {
        closeHamburgerMenu();
    });
    
    // Close menu when clicking outside
    document.getElementById('hamburgerMenu').addEventListener('click', (e) => {
        if (e.target.id === 'hamburgerMenu') {
            closeHamburgerMenu();
        }
    });
    
    // Volume controls in game menu
    document.getElementById('gameBgMusicVolume').addEventListener('input', (e) => {
        gameState.settings.bgMusicVolume = parseInt(e.target.value);
        document.getElementById('gameBgVolumeValue').textContent = gameState.settings.bgMusicVolume + '%';
        updateMusicVolumes();
        saveSettings();
        
        // Update slider background
        const value = e.target.value;
        e.target.style.background = `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`;
    });

    document.getElementById('gameSfxVolume').addEventListener('input', (e) => {
        gameState.settings.sfxVolume = parseInt(e.target.value);
        document.getElementById('gameSfxVolumeValue').textContent = gameState.settings.sfxVolume + '%';
        saveSettings();
        
        // Update slider background
        const value = e.target.value;
        e.target.style.background = `linear-gradient(to right, #10B981 0%, #10B981 ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`;
    });
    
    // Menu buttons
    document.getElementById('restartFromMenu').addEventListener('click', () => {
        closeHamburgerMenu();
        fruitGame.gameRunning = false;
        fruitGame.canDrop = false;
        // Clear player name and reset dev mode
        document.getElementById('playerName').value = '';
        fruitGame.devMode = false;
        document.getElementById('devBtn').classList.add('hidden');
        showScreen('thaiFruitGame');
    });
    
    document.getElementById('homeFromMenu').addEventListener('click', () => {
        closeHamburgerMenu();
        fruitGame.gameRunning = false;
        fruitGame.canDrop = false;
        // Clear player name and reset dev mode
        document.getElementById('playerName').value = '';
        fruitGame.devMode = false;
        document.getElementById('devBtn').classList.add('hidden');
        showScreen('mainMenu');
        switchMusic('background'); // Switch back to background music
    });
}

// Initialize all other event listeners once
function initOtherEventListeners() {
    // Question modal
    document.getElementById('submitAnswer').addEventListener('click', submitAnswer);
    
    // Diamond question event listeners (Math Runner)
    document.getElementById('mathSubmitDiamondAnswer').addEventListener('click', submitDiamondAnswer);
    
    // Text input validation for question 5
    document.getElementById('mathDiamondAnswer').addEventListener('input', (e) => {
        const submitBtn = document.getElementById('mathSubmitDiamondAnswer');
        if (e.target.value.trim()) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
        }
    });
    
    // Game over modal buttons
    document.getElementById('playAgainBtn').addEventListener('click', () => {
        document.getElementById('gameOverModal').classList.add('hidden');
        fruitGame.gameRunning = false;
        fruitGame.canDrop = false;
        // Clear player name and reset dev mode
        document.getElementById('playerName').value = '';
        fruitGame.devMode = false;
        document.getElementById('devBtn').classList.add('hidden');
        showScreen('thaiFruitGame');
    });
    
    document.getElementById('backToMapBtn').addEventListener('click', () => {
        document.getElementById('gameOverModal').classList.add('hidden');
        fruitGame.gameRunning = false;
        // Clear player name and reset dev mode
        document.getElementById('playerName').value = '';
        fruitGame.devMode = false;
        document.getElementById('devBtn').classList.add('hidden');
        showScreen('mapTour');
        switchMusic('background'); // Switch back to background music
    });
    
    // Final summary modal buttons
    document.getElementById('continuePlayingBtn').addEventListener('click', () => {
        document.getElementById('finalSummaryModal').classList.add('hidden');
        fruitGame.gameRunning = false;
        
        // Update student scores if in classroom mode
        if (gameState.isStudent) {
            updateStudentStatus(gameState.playerName, 'playing-math', {
                thaiFruit: { 
                    diamonds: fruitGame.diamonds, 
                    correctAnswers: fruitGame.correctAnswers 
                }
            });
        }
        
        // Clear player name and reset dev mode only if not in classroom
        if (!gameState.isStudent) {
            document.getElementById('playerName').value = '';
        }
        fruitGame.devMode = false;
        document.getElementById('devBtn').classList.add('hidden');
        
        // Unlock Math Runner map and go directly to it
        if (!gameState.unlockedMaps.includes(2)) {
            gameState.unlockedMaps.push(2);
        }
        
        // Show loading screen for Math Runner
        showMathRunnerLoading();
    });
    
    document.getElementById('backToMapFromSummary').addEventListener('click', () => {
        document.getElementById('finalSummaryModal').classList.add('hidden');
        fruitGame.gameRunning = false;
        // Clear player name and reset dev mode
        document.getElementById('playerName').value = '';
        fruitGame.devMode = false;
        document.getElementById('devBtn').classList.add('hidden');
        showScreen('mapTour');
    });
    
    // Diamond summary buttons (Math Runner)
    document.getElementById('mathCloseDiamondSummary').addEventListener('click', () => {
        document.getElementById('mathDiamondSummaryModal').classList.add('hidden');
        mathGame.isPaused = false;
    });
    
    // Next Kingdom button (Math Runner completion)
    document.getElementById('mathNextKingdomBtn').addEventListener('click', () => {
        document.getElementById('mathDiamondSummaryModal').classList.add('hidden');
        mathGame.gameRunning = false;
        
        // Update student scores if in classroom mode
        if (gameState.isStudent) {
            updateStudentStatus(gameState.playerName, 'playing-science', {
                mathRunner: { 
                    diamonds: mathGame.diamonds, 
                    correctAnswers: mathGame.diamondAnswers ? mathGame.diamondAnswers.filter(a => a.isCorrect).length : 0
                }
            });
        }
        
        // Clear player name and reset dev mode only if not in classroom
        if (!gameState.isStudent) {
            document.getElementById('mathPlayerName').value = '';
        }
        mathGame.devMode = false;
        document.getElementById('mathDevBtn').classList.add('hidden');
        
        // Always unlock Science Fight map
        if (!gameState.unlockedMaps.includes(3)) {
            gameState.unlockedMaps.push(3);
            console.log('🎉 Science Fight unlocked!');
        }
        
        // Switch to background music first
        switchMusic('background');
        
        if (gameState.isStudent) {
            // Go directly to Science Fight for students
            const scienceFightGame = document.getElementById('scienceFightGame');
            const scienceBg = isMobile() ? 
                'https://i.ibb.co/NdZjYhF4/mbg1.png' :
                'https://i.ibb.co/svpmkphw/pcbg1.png';
            
            scienceFightGame.style.backgroundImage = `url('${scienceBg}')`;
            scienceFightGame.style.backgroundSize = 'cover';
            scienceFightGame.style.backgroundPosition = 'center';
            
            showScreen('scienceFightGame');
        } else {
            // Show map tour with unlock animation for single player
            console.log('🎬 Showing map tour with unlock animation...');
            showMapTourWithUnlock();
        }
    });
    
    document.getElementById('mathShowSolutions').addEventListener('click', () => {
        showDiamondSolutions();
    });
    
    document.getElementById('mathCloseSolutions').addEventListener('click', () => {
        document.getElementById('mathDiamondSolutionsModal').classList.add('hidden');
        document.getElementById('mathDiamondSummaryModal').classList.remove('hidden');
    });
}

// Initialize developer event listeners
function initDevEventListeners() {
    if (!fruitGame.devMode) return;
    
    // Developer button - รองรับทั้ง click และ touch
    const devBtn = document.getElementById('devBtn');
    devBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleDevMenu();
    });
    
    devBtn.addEventListener('touchend', (e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleDevMenu();
    });
    
    // Close dev menu button
    document.getElementById('closeDevMenuBtn').addEventListener('click', () => {
        closeDevMenu();
    });
    
    // Close dev menu when clicking outside
    document.getElementById('devMenuModal').addEventListener('click', (e) => {
        if (e.target.id === 'devMenuModal') {
            closeDevMenu();
        }
    });
    
    // Fruit selection buttons
    document.querySelectorAll('.dev-fruit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const fruitType = parseInt(btn.dataset.fruit);
            setDevFruitType(fruitType);
            updateDevFruitDisplay();
        });
    });
    
    // Quick action buttons
    document.getElementById('devAddScore').addEventListener('click', () => {
        fruitGame.score += 1000;
        updateScore();
    });
    
    document.getElementById('devAddDiamond').addEventListener('click', () => {
        fruitGame.diamonds += 10;
        updateDiamonds();
    });
    
    document.getElementById('devClearFruits').addEventListener('click', () => {
        fruitGame.fruits = [];
    });
}

// ===== ฟังก์ชันระบบลากผลไม้ไปซ้ายขวา =====

// เริ่มการลาก - เมื่อกดเมาส์
function startDrag(e) {
    // ตรวจสอบว่าคลิกที่ปุ่มเมนูหรือไม่
    if (e.target.closest('#hamburgerBtn') || e.target.closest('#hamburgerMenu') || 
        e.target.closest('#devBtn') || e.target.closest('#devMenuModal')) {
        return; // ไม่ทำอะไรถ้าคลิกปุ่มเมนู
    }
    
    if (!fruitGame.currentFruit || fruitGame.currentFruit.dropped || !fruitGame.canDrop) return;
    
    fruitGame.isDragging = true;
    const rect = document.getElementById('gameContainer').getBoundingClientRect();
    fruitGame.mouseX = e.clientX - rect.left;
    
    showGuideLine();
}

// เริ่มการลาก - เมื่อแตะหน้าจอมือถือ
function startDragTouch(touch) {
    if (!fruitGame.currentFruit || fruitGame.currentFruit.dropped || !fruitGame.canDrop) return;
    
    fruitGame.isDragging = true;
    const rect = document.getElementById('gameContainer').getBoundingClientRect();
    
    // คำนวณตำแหน่งที่แม่นยำสำหรับมือถือ
    const scaleX = fruitGame.gameWidth / rect.width;
    const scaleY = fruitGame.gameHeight / rect.height;
    
    fruitGame.mouseX = (touch.clientX - rect.left) * scaleX;
    
    showGuideLine();
}

function showGuideLine() {
    // Show guide line ตรงกลางของตำแหน่งเมาส์ เริ่มจากก้นผลไม้ + 30px
    const guideLine = document.getElementById('dropGuideLine');
    const fruitRadius = fruitGame.currentFruit.size / 2;
    const fruitBottom = fruitGame.currentFruit.y + fruitRadius + 30;
    
    guideLine.style.left = fruitGame.mouseX + 'px';
    guideLine.style.transform = 'translateX(-50%)';
    guideLine.style.top = fruitBottom + 'px';
    guideLine.style.height = (fruitGame.gameHeight - fruitBottom) + 'px';
    guideLine.style.display = 'block';
    guideLine.style.zIndex = '5';
    guideLine.classList.remove('hidden');
}

// ระหว่างการลาก - เมื่อเลื่อนเมาส์
function drag(e) {
    if (!fruitGame.isDragging || !fruitGame.currentFruit || fruitGame.currentFruit.dropped) return;
    
    const rect = document.getElementById('gameContainer').getBoundingClientRect();
    const fruitRadius = fruitGame.currentFruit.size / 2;
    // จำกัดตำแหน่งผลไม้ให้อยู่ในขอบเขตของเกม (ไม่ให้ออกนอกขอบ)
    fruitGame.mouseX = Math.max(fruitRadius, Math.min(fruitGame.gameWidth - fruitRadius, e.clientX - rect.left));
    
    updateFruitPosition();
}

// ระหว่างการลาก - เมื่อเลื่อนนิ้วบนมือถือ
function dragTouch(touch) {
    if (!fruitGame.isDragging || !fruitGame.currentFruit || fruitGame.currentFruit.dropped) return;
    
    const rect = document.getElementById('gameContainer').getBoundingClientRect();
    const fruitRadius = fruitGame.currentFruit.size / 2;
    
    // คำนวณตำแหน่งที่แม่นยำสำหรับมือถือ
    const scaleX = fruitGame.gameWidth / rect.width;
    const touchX = (touch.clientX - rect.left) * scaleX;
    
    // จำกัดตำแหน่งผลไม้ให้อยู่ในขอบเขตของเกม
    fruitGame.mouseX = Math.max(fruitRadius, Math.min(fruitGame.gameWidth - fruitRadius, touchX));
    
    updateFruitPosition();
}

function updateFruitPosition() {
    // อัพเดตตำแหน่งผลไม้ตามตำแหน่งเมาส์
    fruitGame.currentFruit.x = fruitGame.mouseX;
    updateCurrentFruitDisplay();
    
    // Update guide line ให้อยู่ตรงกลางของตำแหน่งเมาส์ เริ่มจากก้นผลไม้ + 30px
    const guideLine = document.getElementById('dropGuideLine');
    const fruitRadius = fruitGame.currentFruit.size / 2;
    const fruitBottom = fruitGame.currentFruit.y + fruitRadius + 30;
    
    guideLine.style.left = fruitGame.mouseX + 'px';
    guideLine.style.transform = 'translateX(-50%)';
    guideLine.style.top = fruitBottom + 'px';
    guideLine.style.height = (fruitGame.gameHeight - fruitBottom) + 'px';
    guideLine.style.display = 'block';
    guideLine.style.zIndex = '5';
}

// จบการลาก - เมื่อปล่อยเมาส์หรือยกนิ้วขึ้น (ปล่อยผลไม้ลงไป)
function endDrag() {
    if (!fruitGame.isDragging || !fruitGame.currentFruit || fruitGame.currentFruit.dropped) return;
    
    fruitGame.isDragging = false;
    fruitGame.canDrop = false;
    fruitGame.currentFruit.dropped = true;
    fruitGame.currentFruit.isDropping = true; // เริ่มการปล่อย
    fruitGame.currentFruit.vy = 2; // ความเร็วเริ่มต้นในการตก
    fruitGame.currentFruit.vx = 0;
    
    // Add to fruits array
    fruitGame.fruits.push(fruitGame.currentFruit);
    
    // Hide guide line and current fruit display
    const guideLine = document.getElementById('dropGuideLine');
    guideLine.classList.add('hidden');
    guideLine.style.display = 'none';
    document.getElementById('currentFruit').style.display = 'none';
    
    // Check if dropped fruit is fruitwork and play sound
    if (fruitGame.fruitTypes[fruitGame.currentFruit.type].name === 'fruitWork') {
        playFruitWorkDropSound();
    }
    
    // Generate next fruit after delay
    setTimeout(() => {
        fruitGame.canDrop = true;
        
        // If we have forceFruitWork flag, keep it as fruit work
        if (fruitGame.forceFruitWork) {
            fruitGame.forceFruitWork = false; // Reset flag after use
            // Keep nextFruitType as fruitWork
        } else if (fruitGame.nextFruitType === fruitGame.fruitTypes.findIndex(f => f.name === 'fruitWork')) {
            // Only generate random fruit if it's not forced to be fruit work
            if (fruitGame.devMode && fruitGame.devFruitType >= 0) {
                fruitGame.nextFruitType = fruitGame.devFruitType;
            } else {
                fruitGame.nextFruitType = Math.floor(Math.random() * Math.min(fruitGame.availableTypes, 5));
            }
        } else {
            // Normal next fruit generation
            if (fruitGame.devMode && fruitGame.devFruitType >= 0) {
                fruitGame.nextFruitType = fruitGame.devFruitType;
            } else {
                fruitGame.nextFruitType = Math.floor(Math.random() * Math.min(fruitGame.availableTypes, 5));
            }
        }
        
        generateNextFruit();
    }, 800);
}

function gameLoop() {
    if (!fruitGame.gameRunning) return;
    
    updatePhysics();
    checkMerges();
    updateParticles();
    render();
    checkGameOver();
    
    requestAnimationFrame(gameLoop);
}

function updatePhysics() {
    fruitGame.fruits.forEach((fruit, index) => {
        if (fruit.merging) return;
        
        // เพิ่มมวลถ้ายังไม่มี (สำหรับผลไม้เก่าที่ยังไม่มีระบบมวล)
        if (!fruit.mass) {
            fruit.mass = calculateMass(fruit.size);
            fruit.settleTimer = 0;
        }
        
        // ระบบผลไม้งาน - กินผลไม้อื่นๆ
        if (fruitGame.fruitTypes[fruit.type].name === 'fruitWork') {
            // ตรวจสอบการชนกับผลไม้อื่น - ใช้การตรวจสอบที่ละเอียดกว่า
            for (let i = fruitGame.fruits.length - 1; i >= 0; i--) {
                if (i === index) continue; // ข้ามตัวเอง
                
                const otherFruit = fruitGame.fruits[i];
                if (fruitGame.fruitTypes[otherFruit.type].name === 'fruitWork') continue; // ข้ามผลไม้งานด้วยกัน
                
                const dx = otherFruit.x - fruit.x;
                const dy = otherFruit.y - fruit.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // ใช้ระยะห่างที่ใหญ่กว่าเพื่อให้กินได้ง่ายขึ้น - เพิ่มจาก 1.0 เป็น 1.3
                const minDistance = (fruit.size + otherFruit.size) / 2 * 1.3;
                
                // เพิ่มการตรวจสอบแบบ overlap ด้วย bounding box เพื่อความแม่นยำ
                const fruitLeft = fruit.x - fruit.size/2;
                const fruitRight = fruit.x + fruit.size/2;
                const fruitTop = fruit.y - fruit.size/2;
                const fruitBottom = fruit.y + fruit.size/2;
                
                const otherLeft = otherFruit.x - otherFruit.size/2;
                const otherRight = otherFruit.x + otherFruit.size/2;
                const otherTop = otherFruit.y - otherFruit.size/2;
                const otherBottom = otherFruit.y + otherFruit.size/2;
                
                // ตรวจสอบการชนแบบ bounding box overlap
                const isOverlapping = fruitLeft < otherRight && 
                                    fruitRight > otherLeft && 
                                    fruitTop < otherBottom && 
                                    fruitBottom > otherTop;
                
                // กินผลไม้ถ้าระยะห่างใกล้พอ หรือ bounding box ทับกัน
                if (distance < minDistance || isOverlapping) {
                    // กินผลไม้ - ให้คะแนนตามชนิดผลไม้
                    const scoreGain = (otherFruit.type + 1) * 10;
                    fruitGame.score += scoreGain;
                    updateScore();
                    
                    // สร้างเอฟเฟกต์การกิน
                    createEatEffect(otherFruit.x, otherFruit.y, scoreGain);
                    
                    // เล่นเสียง pop เมื่อผลไม้งานกินผลไม้อื่น
                    playMergeSound();
                    
                    // ลบผลไม้ที่ถูกกิน
                    fruitGame.fruits.splice(i, 1);
                    
                    // ปรับ index ถ้าจำเป็น
                    if (i < index) {
                        index--;
                    }
                }
            }
            
            // ผลไม้งานจะหายไปเมื่อตกถึงพื้นแล้ว
            if (fruit.y + fruit.size/2 >= fruitGame.gameHeight) {
                // เริ่มนับเวลาหายไปเมื่อถึงพื้น
                if (!fruit.fadeOut) {
                    fruit.fadeOut = 180; // 3 วินาที
                } else {
                    fruit.fadeOut--;
                    if (fruit.fadeOut <= 0) {
                        // ลบผลไม้งานออก
                        const fruitIndex = fruitGame.fruits.indexOf(fruit);
                        if (fruitIndex !== -1) {
                            fruitGame.fruits.splice(fruitIndex, 1);
                        }
                        return;
                    }
                }
            }
        }
        
        // Gravity - ผลไม้หนักตกเร็วกว่า (แต่ไม่มากเกินไป)
        const gravityForce = 0.4 + (fruit.mass * 0.02);
        fruit.vy += gravityForce;
        
        // Update position
        fruit.x += fruit.vx;
        fruit.y += fruit.vy;
        
        const radius = fruit.size / 2;
        
        // ตรวจสอบว่าผลไม้ผ่านเส้นแดงแล้วหรือไม่ (สำหรับผลไม้ที่กำลังตก)
        if (fruit.isDropping && fruit.y - radius > fruitGame.dangerLine) {
            fruit.isDropping = false; // หยุดสถานะการตก
        }
        
        // Floor collision
        if (fruit.y + radius >= fruitGame.gameHeight) {
            fruit.y = fruitGame.gameHeight - radius;
            
            // การเด้งขึ้นอยู่กับมวล - ผลไม้หนักเด้งน้อยกว่า
            const bounceFactor = Math.max(0.1, 0.4 - (fruit.mass * 0.02));
            fruit.vy *= -bounceFactor;
            
            // แรงเสียดทานขึ้นอยู่กับมวล - ผลไม้หนักหยุดเร็วกว่า
            const frictionFactor = Math.max(0.6, 0.9 - (fruit.mass * 0.02));
            fruit.vx *= frictionFactor;
            
            // ตรวจสอบการหยุดนิ่งตามมวล - ผลไม้ใหญ่หยุดง่ายกว่า
            const settleThreshold = Math.max(0.3, 0.8 - (fruit.mass * 0.05));
            if (Math.abs(fruit.vy) < settleThreshold && Math.abs(fruit.vx) < settleThreshold) {
                fruit.settleTimer++;
                
                // ผลไม้ใหญ่ต้องใช้เวลาน้อยกว่าในการหยุดนิ่ง
                const settleTime = Math.max(5, 15 - fruit.mass);
                if (fruit.settleTimer > settleTime) {
                    fruit.settled = true;
                    fruit.isDropping = false;
                    fruit.vy = 0;
                    fruit.vx *= 0.95;
                }
            } else {
                fruit.settleTimer = 0;
            }
        }
        
        // Wall collision
        if (fruit.x - radius <= 0) {
            fruit.x = radius;
            fruit.vx *= -0.5;
        }
        if (fruit.x + radius >= fruitGame.gameWidth) {
            fruit.x = fruitGame.gameWidth - radius;
            fruit.vx *= -0.5;
        }
        
        // Air resistance ขึ้นอยู่กับมวล - ผลไม้เล็กได้รับผลกระทบมากกว่า
        const airResistance = Math.max(0.995, 0.999 - (fruit.mass * 0.0002));
        fruit.vx *= airResistance;
        fruit.vy *= airResistance;
    });
    
    // Fruit collisions
    for (let i = 0; i < fruitGame.fruits.length; i++) {
        for (let j = i + 1; j < fruitGame.fruits.length; j++) {
            const fruit1 = fruitGame.fruits[i];
            const fruit2 = fruitGame.fruits[j];
            
            if (fruit1.merging || fruit2.merging) continue;
            
            // เพิ่มมวลถ้ายังไม่มี
            if (!fruit1.mass) fruit1.mass = calculateMass(fruit1.size);
            if (!fruit2.mass) fruit2.mass = calculateMass(fruit2.size);
            
            const dx = fruit2.x - fruit1.x;
            const dy = fruit2.y - fruit1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = (fruit1.size + fruit2.size) / 2;
            
            if (distance < minDistance * 1.1 && distance > 0) {
                // ตรวจสอบการรวมก่อนการชน (ถ้าเป็นชนิดเดียวกัน)
                if (fruit1.type === fruit2.type && 
                    !fruit1.merging && !fruit2.merging && 
                    (fruit1.type < fruitGame.fruitTypes.length - 1 || fruit1.type === 7)) {
                    
                    // รวมทันทีเมื่อชนกัน
                    const index1 = fruitGame.fruits.indexOf(fruit1);
                    const index2 = fruitGame.fruits.indexOf(fruit2);
                    if (index1 !== -1 && index2 !== -1) {
                        mergeFruits(index1, index2);
                        return; // หยุดการประมวลผลการชนอื่นๆ ในเฟรมนี้
                    }
                }
                
                // Collision response สำหรับผลไม้ต่างชนิด - คำนวณตามมวล
                const angle = Math.atan2(dy, dx);
                const sin = Math.sin(angle);
                const cos = Math.cos(angle);
                
                // Separate fruits ตามมวล - ผลไม้เล็กถูกดันมากกว่า
                const overlap = minDistance - distance;
                const totalMass = fruit1.mass + fruit2.mass;
                const separation1 = (fruit2.mass / totalMass) * overlap;
                const separation2 = (fruit1.mass / totalMass) * overlap;
                
                fruit1.x -= cos * separation1;
                fruit1.y -= sin * separation1;
                fruit2.x += cos * separation2;
                fruit2.y += sin * separation2;
                
                // ป้องกันผลไม้ลอยขึ้นเหนือเส้นแดง
                const fruit1Top = fruit1.y - fruit1.size/2;
                const fruit2Top = fruit2.y - fruit2.size/2;
                
                if (fruit1Top < fruitGame.dangerLine) {
                    fruit1.y = fruitGame.dangerLine + fruit1.size/2;
                    fruit1.vy = Math.max(0, fruit1.vy); // ไม่ให้เด้งขึ้น
                }
                if (fruit2Top < fruitGame.dangerLine) {
                    fruit2.y = fruitGame.dangerLine + fruit2.size/2;
                    fruit2.vy = Math.max(0, fruit2.vy); // ไม่ให้เด้งขึ้น
                }
                
                // Velocity exchange with mass-based physics
                const v1n = fruit1.vx * cos + fruit1.vy * sin;
                const v1t = -fruit1.vx * sin + fruit1.vy * cos;
                const v2n = fruit2.vx * cos + fruit2.vy * sin;
                const v2t = -fruit2.vx * sin + fruit2.vy * cos;
                
                // Conservation of momentum with mass
                const newV1n = ((fruit1.mass - fruit2.mass) * v1n + 2 * fruit2.mass * v2n) / totalMass;
                const newV2n = ((fruit2.mass - fruit1.mass) * v2n + 2 * fruit1.mass * v1n) / totalMass;
                
                // Convert back to x,y coordinates
                fruit1.vx = newV1n * cos - v1t * sin;
                fruit1.vy = newV1n * sin + v1t * cos;
                fruit2.vx = newV2n * cos - v2t * sin;
                fruit2.vy = newV2n * sin + v2t * cos;
                
                // Apply damping based on mass - ผลไม้หนักสูญเสียพลังงานน้อยกว่า
                const damping1 = Math.max(0.7, 0.9 - (fruit1.mass * 0.01));
                const damping2 = Math.max(0.7, 0.9 - (fruit2.mass * 0.01));
                
                fruit1.vx *= damping1;
                fruit1.vy *= damping1;
                fruit2.vx *= damping2;
                fruit2.vy *= damping2;
                
                // Reset settled state and timers
                fruit1.settled = false;
                fruit2.settled = false;
                fruit1.settleTimer = 0;
                fruit2.settleTimer = 0;
            }
        }
    }
}

function checkMerges() {
    // ตรวจสอบการรวมครั้งละ 1 คู่เพื่อป้องกัน conflict
    for (let i = 0; i < fruitGame.fruits.length; i++) {
        for (let j = i + 1; j < fruitGame.fruits.length; j++) {
            const fruit1 = fruitGame.fruits[i];
            const fruit2 = fruitGame.fruits[j];
            
            // ตรวจสอบเงื่อนไขการรวม
            if (fruit1.type !== fruit2.type) continue; // ต้องเป็นชนิดเดียวกัน
            if (fruit1.merging || fruit2.merging) continue; // ไม่ได้อยู่ในขั้นตอนการรวม
            if (fruit1.type >= fruitGame.fruitTypes.length - 1 && fruit1.type !== 7) continue; // ไม่ใช่ผลไม้ระดับสูงสุด แต่ยกเว้นผลไม้ถ้วยรางวัล
            
            const dx = fruit2.x - fruit1.x;
            const dy = fruit2.y - fruit1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = (fruit1.size + fruit2.size) / 2 * 0.7; // ลดระยะห่างให้ผลไม้ใกล้ชิดกันมากขึ้น
            
            // ตรวจสอบว่าผลไม้สัมผัสกัน
            if (distance <= minDistance) {
                // ตรวจสอบว่าผลไม้ทั้งสองเคลื่อนที่ช้าพอ (เกือบหยุด) หรือไม่
                const speed1 = Math.sqrt(fruit1.vx * fruit1.vx + fruit1.vy * fruit1.vy);
                const speed2 = Math.sqrt(fruit2.vx * fruit2.vx + fruit2.vy * fruit2.vy);
                
                // รวมทันทีถ้าผลไม้เคลื่อนที่ช้าหรือหยุด
                if (speed1 < 3 && speed2 < 3) {
                    mergeFruits(i, j);
                    return; // รวมครั้งละ 1 คู่
                }
            }
        }
    }
}

function mergeFruits(index1, index2) {
    const fruit1 = fruitGame.fruits[index1];
    const fruit2 = fruitGame.fruits[index2];
    
    // เล่นเสียงเอฟเฟคการรวมทันทีที่เริ่มรวม
    playMergeSound();
    
    // คำนวณมวลรวมและโมเมนตัม
    const totalMass = fruit1.mass + fruit2.mass;
    const totalMomentumX = fruit1.vx * fruit1.mass + fruit2.vx * fruit2.mass;
    const totalMomentumY = fruit1.vy * fruit1.mass + fruit2.vy * fruit2.mass;
    
    // ตรวจสอบว่าเป็นการรวมของผลไม้ถ้วยรางวัล (victory) หรือไม่
    let newType;
    if (fruit1.type === 7 && fruit2.type === 7) {
        // ถ้าเป็นการรวมของผลไม้ถ้วยรางวัล ให้กลายเป็น Diamond1
        newType = 9; // Diamond1 index
    } else {
        // การรวมปกติ
        newType = fruit1.type + 1;
    }
    
    // สร้างผลไม้ใหม่
    const newSize = fruitGame.fruitTypes[newType].size;
    const newMass = calculateMass(newSize);
    
    const newFruit = {
        type: newType,
        x: (fruit1.x * fruit1.mass + fruit2.x * fruit2.mass) / totalMass, // ตำแหน่งตามมวล
        y: (fruit1.y * fruit1.mass + fruit2.y * fruit2.mass) / totalMass,
        vx: totalMomentumX / newMass, // อนุรักษ์โมเมนตัม
        vy: (totalMomentumY / newMass) - 1, // เด้งขึ้นเล็กน้อย
        size: newSize,
        mass: newMass,
        dropped: true,
        merging: false,
        glowEffect: 0, // ไม่ใช้เรืองแสงแบบเก่า
        settled: false,
        settleTimer: 0,
        scaleEffect: 1.5, // ขยายใหญ่ขึ้น
        scaleTimer: 30, // เวลาในการขยาย
        neonEffect: 255, // เอฟเฟกต์นีออนใหม่
        neonTimer: 90, // เวลาในการแสดงนีออน
        isDropping: false
    };
    
    // เพิ่มคะแนน
    const scoreGain = (fruit1.type + 1) * 20;
    fruitGame.score += scoreGain;
    
    // Update fruit collection progress - count the score of merged fruit type
    const mergedFruitName = fruitGame.fruitTypes[fruit1.type].name;
    if (fruitGame.fruitCollection.hasOwnProperty(mergedFruitName)) {
        fruitGame.fruitCollection[mergedFruitName] += scoreGain;
        updateFruitCollectionProgress();
        
        // Check if should trigger question
        checkForQuestionTrigger();
    }
    
    // Check for Diamond (every 100 points)
    if (fruitGame.score >= 100) {
        fruitGame.diamonds++;
        updateDiamonds();
        
        // Create diamond effect
        createDiamondEffect(newFruit.x, newFruit.y);
        
        // Reset score to 0 after getting diamond
        fruitGame.score = 0;
    }
    
    updateScore();
    
    // สร้างพาร์ติเคิลพร้อมคะแนน
    createMergeParticles(newFruit.x, newFruit.y, scoreGain);
    
    // ลบผลไม้เก่าและเพิ่มผลไม้ใหม่
    fruitGame.fruits.splice(Math.max(index1, index2), 1);
    fruitGame.fruits.splice(Math.min(index1, index2), 1);
    fruitGame.fruits.push(newFruit);
    
    // อัพเดตชนิดผลไม้ที่สามารถใช้ได้
    updateAvailableTypes();
}

function checkForQuestionTrigger() {
    if (fruitGame.questionsCompleted >= 5) return; // Already completed all questions
    
    const currentQuestion = questions[fruitGame.questionsCompleted];
    if (!currentQuestion) return;
    
    const requirement = currentQuestion.requirement;
    const target = currentQuestion.target;
    const current = fruitGame.fruitCollection[requirement];
    
    if (current >= target) {
        // Trigger question
        setTimeout(() => {
            showQuestion(fruitGame.questionsCompleted);
        }, 1000);
    }
}

function createEatEffect(x, y, score) {
    // สร้างเอฟเฟกต์การกิน - พาร์ติเคิลสีเขียว
    for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        
        fruitGame.particles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 60,
            maxLife: 60,
            size: 6,
            type: 'eat',
            color: '#10B981' // Green color for eating
        });
    }
    
    // สร้างตัวเลขคะแนน
    fruitGame.particles.push({
        x: x,
        y: y,
        vx: 0,
        vy: -2,
        life: 90,
        maxLife: 90,
        size: 20,
        type: 'score',
        text: '+' + score
    });
}

function createDiamondEffect(x, y) {
    // Create diamond particles
    for (let i = 0; i < 15; i++) {
        const angle = (i / 15) * Math.PI * 2;
        const speed = Math.random() * 3 + 2;
        
        fruitGame.particles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 120,
            maxLife: 120,
            size: 8,
            type: 'diamond',
            color: '#9333EA' // Purple color for diamond
        });
    }
    
    // Create diamond text
    fruitGame.particles.push({
        x: x,
        y: y,
        vx: 0,
        vy: -3,
        life: 150,
        maxLife: 150,
        size: 28,
        type: 'score',
        text: '💎 +1 Diamond!'
    });
}

function createMergeParticles(x, y, score) {
    // สีพาสเทลสำหรับดาว - แต่ละดาวจะมีสีไม่ซ้ำกัน
    const pastelColors = [
        '#FFB3BA', // ชมพูอ่อน
        '#FFDFBA', // ส้มอ่อน
        '#FFFFBA', // เหลืองอ่อน
        '#BAFFC9', // เขียวอ่อน
        '#BAE1FF', // ฟ้าอ่อน
        '#E1BAFF', // ม่วงอ่อน
        '#FFBAE1', // ชมพูม่วงอ่อน
        '#C9FFBA', // เขียวมิ้นต์
        '#FFCBA4', // พีชอ่อน
        '#D4BAFF'  // ลาเวนเดอร์อ่อน
    ];
    
    // สร้างดาวพาร์ติเคิลสี pastel กระจายไม่กว้าง - ขนาดใหญ่ขึ้น
    for (let i = 0; i < 10; i++) {
        const angle = (i / 10) * Math.PI * 2;
        const speed = Math.random() * 1.5 + 1; // ลดความเร็วให้กระจายไม่กว้างมาก
        const size = 12; // ขนาดใหญ่ขึ้นเป็น 12 พิกเซล
        
        fruitGame.particles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 150, // อายุยาวขึ้นให้หายช้าๆ
            maxLife: 150,
            size: size,
            type: 'star',
            color: pastelColors[i], // ใช้สีตามลำดับไม่ซ้ำ
            rotation: Math.random() * Math.PI * 2, // หมุนดาว
            rotationSpeed: (Math.random() - 0.5) * 0.15 // หมุนช้าลงเล็กน้อย
        });
    }
    
    // สร้างแสงประกายสีทอง
    for (let i = 0; i < 6; i++) {
        fruitGame.particles.push({
            x: x + (Math.random() - 0.5) * 20, // ลดการกระจาย
            y: y + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 70,
            maxLife: 70,
            size: Math.random() * 8 + 4,
            type: 'sparkle'
        });
    }
    
    // สร้างตัวเลขคะแนนที่ลอยขึ้น
    fruitGame.particles.push({
        x: x,
        y: y,
        vx: 0,
        vy: -2, // ลอยขึ้น
        life: 120,
        maxLife: 120,
        size: 24,
        type: 'score',
        text: '+' + score
    });
}

function updateParticles() {
    fruitGame.particles = fruitGame.particles.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.type === 'star') {
            particle.vy += 0.05; // แรงโน้มถ่วงน้อยลง
            particle.vx *= 0.98; // ความต้านทานอากาศเพิ่มขึ้นเล็กน้อย
            if (particle.rotation !== undefined) {
                particle.rotation += particle.rotationSpeed; // หมุนดาวต่อเนื่อง
            }
        } else {
            particle.vy += 0.05;
            particle.vx *= 0.95;
        }
        
        particle.life--;
        return particle.life > 0;
    });
}

function render() {
    fruitGame.ctx.clearRect(0, 0, fruitGame.gameWidth, fruitGame.gameHeight);
    
    // Draw fruits
    fruitGame.fruits.forEach(fruit => {
        const fruitType = fruitGame.fruitTypes[fruit.type];
        const img = fruitGame.loadedImages[fruitType.name];
        
        // ใช้รูปที่โหลดไว้แล้ว (ไม่ต้องตรวจสอบ complete เพราะโหลดไว้แล้ว)
        if (img) {
            fruitGame.ctx.save();
            
            // Scale effect for newly merged fruits
            let scale = 1;
            if (fruit.scaleEffect && fruit.scaleEffect > 1) {
                scale = fruit.scaleEffect;
                if (fruit.scaleTimer > 0) {
                    fruit.scaleTimer--;
                    fruit.scaleEffect = Math.max(1, fruit.scaleEffect - 0.017); // ค่อยๆ ลดขนาด
                }
            }
            
            const drawSize = fruit.size * scale;
            
            // Neon effect for newly merged fruits
            if (fruit.neonEffect && fruit.neonTimer > 0) {
                const neonAlpha = fruit.neonTimer / 90;
                
                // วาดเงาสีทองรอบๆ ผลไม้
                fruitGame.ctx.shadowColor = '#FFD700';
                fruitGame.ctx.shadowBlur = 25 * neonAlpha;
                fruitGame.ctx.shadowOffsetX = 0;
                fruitGame.ctx.shadowOffsetY = 0;
                
                // วาดผลไม้ปกติก่อน
                fruitGame.ctx.drawImage(
                    img,
                    fruit.x - drawSize/2,
                    fruit.y - drawSize/2,
                    drawSize,
                    drawSize
                );
                
                // วาดเลเยอร์สีขาวทับ (เอฟเฟกต์นีออน)
                fruitGame.ctx.globalCompositeOperation = 'screen';
                fruitGame.ctx.globalAlpha = neonAlpha * 0.6;
                fruitGame.ctx.fillStyle = '#FFFFFF';
                fruitGame.ctx.beginPath();
                fruitGame.ctx.arc(fruit.x, fruit.y, drawSize/2, 0, Math.PI * 2);
                fruitGame.ctx.fill();
                
                // รีเซ็ตการตั้งค่า
                fruitGame.ctx.globalCompositeOperation = 'source-over';
                fruitGame.ctx.globalAlpha = 1;
                fruitGame.ctx.shadowBlur = 0;
                
                fruit.neonTimer--;
            } else {
                // วาดผลไม้ปกติ
                if (fruit.fadeOut !== undefined) {
                    // ผลไม้งานที่กำลังหายไป
                    const fadeAlpha = fruit.fadeOut / 60;
                    fruitGame.ctx.globalAlpha = fadeAlpha;
                }
                
                fruitGame.ctx.drawImage(
                    img,
                    fruit.x - drawSize/2,
                    fruit.y - drawSize/2,
                    drawSize,
                    drawSize
                );
                
                if (fruit.fadeOut !== undefined) {
                    fruitGame.ctx.globalAlpha = 1; // รีเซ็ต alpha
                }
            }
            
            fruitGame.ctx.restore();
        } else {
            // ถ้าไม่มีรูป วาดวงกลมสีแทน
            fruitGame.ctx.save();
            fruitGame.ctx.fillStyle = ['#FFE135', '#FF8C42', '#FF6B35', '#8B4513', '#90EE90', '#FF69B4', '#DDA0DD', '#FFD700', '#00CED1', '#FF1493', '#9370DB'][fruit.type] || '#FF6B35';
            fruitGame.ctx.beginPath();
            fruitGame.ctx.arc(fruit.x, fruit.y, fruit.size/2, 0, Math.PI * 2);
            fruitGame.ctx.fill();
            fruitGame.ctx.restore();
        }
    });
    
    // Draw particles
    fruitGame.particles.forEach(particle => {
        const alpha = particle.life / particle.maxLife;
        fruitGame.ctx.save();
        
        if (particle.type === 'star') {
            // วาดดาวสี pastel
            const color = particle.color || '#FFB3BA';
            const rgb = hexToRgb(color);
            fruitGame.ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
            
            // หมุนดาว
            fruitGame.ctx.translate(particle.x, particle.y);
            if (particle.rotation !== undefined) {
                fruitGame.ctx.rotate(particle.rotation);
            }
            
            fruitGame.ctx.beginPath();
            const spikes = 5;
            const outerRadius = particle.size;
            const innerRadius = particle.size * 0.4;
            
            for (let i = 0; i < spikes * 2; i++) {
                const angle = (i * Math.PI) / spikes;
                const radius = i % 2 === 0 ? outerRadius : innerRadius;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                if (i === 0) fruitGame.ctx.moveTo(x, y);
                else fruitGame.ctx.lineTo(x, y);
            }
            
            fruitGame.ctx.closePath();
            fruitGame.ctx.fill();
        } else if (particle.type === 'sparkle') {
            // วาดแสงประกายสีทอง
            fruitGame.ctx.fillStyle = `rgba(255, 215, 0, ${alpha})`;
            fruitGame.ctx.shadowColor = '#FFD700';
            fruitGame.ctx.shadowBlur = particle.size;
            fruitGame.ctx.beginPath();
            fruitGame.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            fruitGame.ctx.fill();
        } else if (particle.type === 'eat') {
            // วาดพาร์ติเคิลการกิน สีเขียว
            const color = particle.color || '#10B981';
            const rgb = hexToRgb(color);
            fruitGame.ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
            fruitGame.ctx.shadowColor = color;
            fruitGame.ctx.shadowBlur = particle.size * 1.5;
            fruitGame.ctx.beginPath();
            fruitGame.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            fruitGame.ctx.fill();
        } else if (particle.type === 'diamond') {
            // วาดพาร์ติเคิล Diamond สีม่วง
            const color = particle.color || '#9333EA';
            const rgb = hexToRgb(color);
            fruitGame.ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
            fruitGame.ctx.shadowColor = color;
            fruitGame.ctx.shadowBlur = particle.size * 2;
            fruitGame.ctx.beginPath();
            fruitGame.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            fruitGame.ctx.fill();
        } else if (particle.type === 'score') {
            // วาดตัวเลขคะแนน
            fruitGame.ctx.font = `bold ${particle.size}px Kanit`;
            fruitGame.ctx.textAlign = 'center';
            fruitGame.ctx.textBaseline = 'middle';
            
            // เงาของตัวเลข
            fruitGame.ctx.fillStyle = `rgba(0, 0, 0, ${alpha * 0.5})`;
            fruitGame.ctx.fillText(particle.text, particle.x + 2, particle.y + 2);
            
            // ตัวเลขหลัก - เปลี่ยนสีตามประเภท
            if (particle.text.includes('Diamond')) {
                fruitGame.ctx.fillStyle = `rgba(147, 51, 234, ${alpha})`; // Purple for diamond
            } else {
                fruitGame.ctx.fillStyle = `rgba(255, 215, 0, ${alpha})`; // Gold for score
            }
            fruitGame.ctx.fillText(particle.text, particle.x, particle.y);
        }
        
        fruitGame.ctx.restore();
    });
}

// Helper function to convert hex to rgb
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {r: 255, g: 179, b: 186}; // default pink
}

function checkGameOver() {
    // ตรวจสอบผลไม้ทุกลูกที่อยู่เหนือเส้นแดง
    const gameOver = fruitGame.fruits.some(fruit => {
        // ข้ามผลไม้ที่กำลังตกลงมาใหม่ๆ (ให้เวลา 2 วินาที)
        if (fruit.isDropping) return false;
        
        const fruitTop = fruit.y - fruit.size/2;
        
        // ตรวจสอบว่าผลไม้อยู่เหนือเส้นแดงและเคลื่อนที่ช้าพอ
        if (fruitTop <= fruitGame.dangerLine) {
            const speed = Math.sqrt(fruit.vx * fruit.vx + fruit.vy * fruit.vy);
            // ถ้าผลไม้เคลื่อนที่ช้ามาก (เกือบหยุด) และอยู่เหนือเส้นแดง = เกมจบ
            return speed < 1;
        }
        
        return false;
    });
    
    if (gameOver && fruitGame.gameRunning) {
        fruitGame.gameRunning = false;
        fruitGame.canDrop = false; // หยุดการวางผลไม้ใหม่
        
        // แสดงคะแนนและข้อมูลทั้งหมด
        document.getElementById('finalScore').textContent = fruitGame.score;
        document.getElementById('finalDiamonds').textContent = fruitGame.diamonds;
        document.getElementById('finalQuestions').textContent = fruitGame.questionsCompleted;
        
        // แสดง Game Over Modal ทันที
        setTimeout(() => {
            document.getElementById('gameOverModal').classList.remove('hidden');
        }, 500);
        
        // ปลดล็อคแมพถัดไป (ถ้ามี)
        if (fruitGame.score >= 1000 && !gameState.unlockedMaps.includes(2)) {
            gameState.unlockedMaps.push(2);
        }
    }
}

// Developer menu functions
function toggleDevMenu() {
    const menu = document.getElementById('devMenuModal');
    menu.classList.toggle('hidden');
    fruitGame.devMenuOpen = !fruitGame.devMenuOpen;
}

function closeDevMenu() {
    document.getElementById('devMenuModal').classList.add('hidden');
    fruitGame.devMenuOpen = false;
}

function setDevFruitType(fruitType) {
    fruitGame.devFruitType = fruitType;
    
    // Update button styles
    document.querySelectorAll('.dev-fruit-btn').forEach(btn => {
        btn.classList.remove('bg-purple-300', 'ring-2', 'ring-purple-500');
        btn.classList.add('bg-purple-100');
    });
    
    // Highlight selected button
    const selectedBtn = document.querySelector(`[data-fruit="${fruitType}"]`);
    if (selectedBtn) {
        selectedBtn.classList.remove('bg-purple-100');
        selectedBtn.classList.add('bg-purple-300', 'ring-2', 'ring-purple-500');
    }
    
    console.log(`🔧 Dev fruit type set to: ${fruitType === -1 ? 'Random' : fruitGame.fruitTypes[fruitType]?.name || 'Unknown'}`);
}

function updateDevFruitDisplay() {
    const currentDevFruit = document.getElementById('currentDevFruit');
    if (fruitGame.devFruitType === -1) {
        currentDevFruit.textContent = 'Random';
    } else {
        const fruitName = fruitGame.fruitTypes[fruitGame.devFruitType]?.name || 'Unknown';
        currentDevFruit.textContent = fruitName.charAt(0).toUpperCase() + fruitName.slice(1);
    }
}

// Add tap to enter functionality
function initTapToEnter() {
    const tapScreen = document.getElementById('tapToEnterScreen');
    
    const handleTapToEnter = (e) => {
        console.log('🎵 User interaction detected:', e.type);
        console.log('🎵 Current screen:', gameState.currentScreen);
        
        if (gameState.currentScreen !== 'tapToEnterScreen') {
            console.log('🎵 Not on tap screen, ignoring');
            return;
        }
        
        console.log('🎵 Processing tap to enter...');
        
        // Prevent default and stop propagation
        e.preventDefault();
        e.stopPropagation();
        
        // Show main menu first
        showScreen('mainMenu');
        console.log('🎵 Switched to main menu');
        
        // Start music with a small delay to ensure screen transition
        setTimeout(() => {
            console.log('🎵 Starting music...');
            forceStartMusic();
        }, 100);
        
        // Remove event listeners after first tap
        tapScreen.removeEventListener('click', handleTapToEnter);
        tapScreen.removeEventListener('touchstart', handleTapToEnter);
        tapScreen.removeEventListener('touchend', handleTapToEnter);
        document.removeEventListener('keydown', handleKeyToEnter);
        
        console.log('🎵 Event listeners removed');
    };
    
    const handleKeyToEnter = (e) => {
        if (gameState.currentScreen === 'tapToEnterScreen') {
            console.log('🎵 Key pressed:', e.key);
            handleTapToEnter(e);
        }
    };
    
    // Add event listeners for tap/click/key
    console.log('🎵 Adding tap to enter event listeners');
    tapScreen.addEventListener('click', handleTapToEnter);
    tapScreen.addEventListener('touchstart', handleTapToEnter);
    tapScreen.addEventListener('touchend', handleTapToEnter);
    document.addEventListener('keydown', handleKeyToEnter);
}

// Initialize game
function initGame() {
    console.log('🎮 เริ่มต้นเกม...');
    setRandomBackground();
    
    // Add fallback timer in case image loading fails
    setTimeout(() => {
        if (gameState.currentScreen === 'loading') {
            console.log('⚠️ Fallback: โหลดนานเกินไป กำลังไปหน้าหลัก...');
            setRandomBackground();
            showScreen('tapToEnterScreen');
            // Don't start music yet - wait for tap
        }
    }, 10000); // 10 second fallback
    
    preloadImages();
    initBackgroundMusic(); // Initialize background music
    initTapToEnter(); // Initialize tap to enter functionality
    // Initialize menu event listeners once
    initMenuEventListeners();
    initOtherEventListeners();
}

function resumeBackgroundMusic(){
    
}
// Math Runner Loading Function
function showMathRunnerLoading() {
    // Show loading screen with same background as initial loading
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingBar = document.getElementById('loadingBar');
    const loadingText = document.getElementById('loadingText');
    
    // Reset loading bar
    loadingBar.style.width = '0%';
    loadingText.textContent = 'กำลังโหลด Math Runner... 0%';
    
    // Show loading screen
    showScreen('loadingScreen');
    
    // Math Runner specific images to load
    const mathRunnerImages = [
        // Math Runner backgrounds - Desktop
        'https://i.ibb.co/spB14Y3H/bg.jpg',
        'https://i.ibb.co/ZRx4YLYy/bg2.jpg',
        'https://i.ibb.co/bjdFvp1c/bg3.jpg',
        'https://i.ibb.co/tP3TM57Z/bg4.jpg',
        // Math Runner backgrounds - Mobile
        'https://i.ibb.co/xS8bqrxs/mbg1.jpg',
        'https://i.ibb.co/spnx9BPb/mbg2.jpg',
        'https://i.ibb.co/nssmJSyF/mbg3.jpg',
        'https://i.ibb.co/Z6qxWMr8/mbg4.jpg',
        // Math Runner character images
        'https://i.ibb.co/4gp4jLj2/maincharater.png',
        'https://i.ibb.co/YB2NgC6r/run.png',
        // Math Runner box images
        'https://i.ibb.co/dwqSMDwQ/watermelon.png',
        'https://i.ibb.co/7xjJnzTR/tomato.png',
        'https://i.ibb.co/Zp4CZg6f/strawberry.png',
        'https://i.ibb.co/GfZWmWb8/orange.png',
        'https://i.ibb.co/KxVKNZBq/durian.png',
        'https://i.ibb.co/jPs5x34M/kiwi.png',
        'https://i.ibb.co/0jmpmNQs/dragonfruit.png',
        'https://i.ibb.co/kV23MN8S/carrot.png',
        'https://i.ibb.co/rRF1JCx6/blueberry.png',
        // Math Runner special boxes
        'https://i.ibb.co/8nXCj74f/rainbow.png',
        'https://i.ibb.co/xqWdszjs/speed.png',
        'https://i.ibb.co/hJ33VQky/slowness.png',
        'https://i.ibb.co/v43htZzN/bomb.png'
    ];
    
    let loadedCount = 0;
    const totalImages = mathRunnerImages.length;
    
    // Load images that aren't already loaded
    const imagesToLoad = mathRunnerImages.filter(src => !globalImages[src]);
    
    if (imagesToLoad.length === 0) {
        // All images already loaded - set background and show Math Runner
        setMathRunnerBackground();
        setTimeout(() => {
            showScreen('mathRunnerGame');
        resumeBackgroundMusic(); 
        }, 500);
        return;
    }
    
    imagesToLoad.forEach(src => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = () => {
            globalImages[src] = img;
            loadedCount++;
            const progress = Math.round((loadedCount / imagesToLoad.length) * 100);
            loadingBar.style.width = progress + '%';
            loadingText.textContent = `กำลังโหลด Math Runner... ${progress}%`;
            
            if (loadedCount === imagesToLoad.length) {
                console.log('✅ โหลดรูปภาพ Math Runner เสร็จแล้ว');
                // Set background before showing screen
                setMathRunnerBackground();
                setTimeout(() => {
                    showScreen('mathRunnerGame');
        resumeBackgroundMusic(); 
                }, 500);
            }
        };
        
        img.onerror = () => {
            console.warn('⚠️ ไม่สามารถโหลดรูปภาพ Math Runner:', src);
            loadedCount++;
            const progress = Math.round((loadedCount / imagesToLoad.length) * 100);
            loadingBar.style.width = progress + '%';
            loadingText.textContent = `กำลังโหลด Math Runner... ${progress}%`;
            
            if (loadedCount === imagesToLoad.length) {
                console.log('✅ โหลดรูปภาพ Math Runner เสร็จแล้ว (บางรูปอาจโหลดไม่ได้)');
                // Set background before showing screen
                setMathRunnerBackground();
                setTimeout(() => {
                    showScreen('mathRunnerGame');
        resumeBackgroundMusic(); // Resume music when entering Math Runner
                }, 500);
            }
        };
        
        img.src = src;
    });
}

// Function to set Math Runner background
function setMathRunnerBackground() {
    const mathRunnerGame = document.getElementById('mathRunnerGame');
    const mathBgs = isMobile() ? 
        ['https://i.ibb.co/xS8bqrxs/mbg1.jpg', 'https://i.ibb.co/spnx9BPb/mbg2.jpg', 'https://i.ibb.co/nssmJSyF/mbg3.jpg', 'https://i.ibb.co/Z6qxWMr8/mbg4.jpg'] :
        ['https://i.ibb.co/spB14Y3H/bg.jpg', 'https://i.ibb.co/ZRx4YLYy/bg2.jpg', 'https://i.ibb.co/bjdFvp1c/bg3.jpg', 'https://i.ibb.co/tP3TM57Z/bg4.jpg'];
    
    const randomBg = mathBgs[Math.floor(Math.random() * mathBgs.length)];
    mathRunnerGame.style.backgroundImage = `url('${randomBg}')`;
    mathRunnerGame.style.backgroundSize = 'cover';
    mathRunnerGame.style.backgroundPosition = 'center';
    console.log('✅ ตั้งค่าพื้นหลัง Math Runner:', randomBg);
}

// Diamond Questions Data
const diamondQuestions = [
    {
        question: "ปราสาทตาเมือนธมมีปราสาทประธาน 1 หลัง และปราสาทขนาดเล็ก 2 หลัง หากการบูรณะปราสาทขนาดเล็ก 1 หลัง ใช้หินทราย 2,500 ก้อน และการบูรณะปราสาทประธานใช้หินทรายเป็น 4 เท่าของปราสาทขนาดเล็ก 1 หลัง จะต้องใช้หินทรายทั้งหมดกี่ก้อนในการบูรณะปราสาททั้ง 3 หลัง?",
        options: [
            "ก. 10,000 ก้อน",
            "ข. 15,000 ก้อน", 
            "ค. 12,500 ก้อน",
            "ง. 20,000 ก้อน"
        ],
        correct: 1, // ข
        solution: "**วิธีทำ:**\n1. **หินทรายสำหรับปราสาทขนาดเล็ก:** ปราสาทขนาดเล็ก 1 หลังใช้ 2,500 ก้อน ดังนั้น 2 หลังใช้ 2,500×2=5,000 ก้อน\n2. **หินทรายสำหรับปราสาทประธาน:** ปราสาทประธานใช้เป็น 4 เท่าของปราสาทขนาดเล็ก 1 หลัง คือ 2,500×4=10,000 ก้อน\n3. **หินทรายทั้งหมด:** นำจำนวนหินทรายทั้งหมดมารวมกัน 5,000 (ปราสาทเล็ก)+10,000 (ปราสาทประธาน)=15,000 ก้อน\n**ดังนั้น จะต้องใช้หินทรายทั้งหมด 15,000 ก้อน**"
    },
    {
        question: "แผนผังของปราสาทตาเมือนธมเป็นรูปสี่เหลี่ยมผืนผ้า มีกำแพงล้อมรอบยาวด้านละ 40 เมตร และ 60 เมตร หากต้องการเดินสำรวจรอบกำแพงปราสาท 2 รอบ จะต้องเดินเป็นระยะทางทั้งหมดเท่าไหร่?",
        options: [
            "ก. 400 เมตร",
            "ข. 100 เมตร",
            "ค. 2,400 เมตร", 
            "ง. 200 เมตร"
        ],
        correct: 0, // ก
        solution: "**วิธีทำ:**\n1. **ความยาวรอบรูป 1 รอบ:** กำแพงเป็นสี่เหลี่ยมผืนผ้า มีด้านกว้าง 40 เมตร และด้านยาว 60 เมตร\n\tความยาวรอบรูป = 2×(กว้าง+ยาว)=2×(40+60)=2×100=200 เมตร\n2. **ระยะทางเดิน 2 รอบ:** ต้องการเดิน 2 รอบ ดังนั้นระยะทางทั้งหมดคือ 200×2=400 เมตร\n**ดังนั้น จะต้องเดินเป็นระยะทางทั้งหมด 400 เมตร**"
    },
    {
        question: "อ่างเก็บน้ำขนาด 20,000 ลูกบาศก์เมตร สำหรับใช้ในปราสาทตาควาย เริ่มเปิดน้ำเข้าด้วยอัตรา 150 ลูกบาศก์เมตรต่อชั่วโมง แต่มีน้ำรั่วออก 10 ลูกบาศก์เมตรต่อชั่วโมง หากอ่างเก็บน้ำเริ่มจากไม่มีน้ำเลย และเปิดน้ำเข้าต่อเนื่อง 5 วัน อ่างเก็บน้ำจะมีน้ำอยู่เต็มความจุพอดีใช่หรือไม่?",
        options: [
            "ก. ไม่ใช่",
            "ข. ใช่"
        ],
        correct: 0, // ก
        solution: "**วิธีทำ:**\nใน 5 วัน อ่างเก็บน้ำจะมีน้ำ 16,800 ลูกบาศก์เมตร ซึ่งน้อยกว่าความจุ 20,000 ลูกบาศก์เมตร ดังนั้นคำตอบคือ ไม่ใช่"
    },
    {
        question: "ร้านขายของที่ระลึกที่ปราสาทตาควายขายเสื้อยืดตัวละ 250 บาท และแก้วมัคใบละ 120 บาท ในเดือนที่ผ่านมา ขายเสื้อยืดได้ 200 ตัว โดยมีส่วนลด 10% สำหรับทุกตัวที่ขายได้เกิน 150 ตัว และขายแก้วมัคได้ 150 ใบ โดยมีส่วนลด 5% สำหรับทุกใบ หากค่าใช้จ่ายรวมของเสื้อยืดคือ 150 บาทต่อตัว และแก้วมัคคือ 80 บาทต่อใบ ร้านค้าจะทำกำไรรวมจากการขายสินค้าทั้งสองชนิดนี้เกิน 25,000 บาท ใช่หรือไม่?",
        options: [
            "ก. ไม่ใช่",
            "ข. ใช่"
        ],
        correct: 1, // ข
        solution: "**วิธีทำ:**\nกำไรรวมจากการขายสินค้าทั้งสองชนิดคือ 25,100 บาท ซึ่งเกิน 25,000 บาท ดังนั้นคำตอบคือ ใช่"
    },
    {
        question: "ปราสาทตาเมือนโต๊ดมีห้องโถงกลางรูปสี่เหลี่ยมผืนผ้าขนาด 10 เมตร × 6 เมตร ผนังห้องสูง 4 เมตร หากการทำความสะอาดผนังห้องโถงนี้มีค่าใช้จ่าย 50 บาทต่อตารางเมตร และค่าทำความสะอาดพื้นห้อง 80 บาทต่อตารางเมตร จงคำนวณค่าใช้จ่ายรวมในการทำความสะอาดห้องโถงนี้ทั้งหมด (ไม่คิดรวมเพดานและส่วนอื่นๆ ที่ไม่ได้ระบุ)",
        options: [], // No options for text input
        correct: 11200, // Numeric answer
        isTextInput: true,
        solution: "**วิธีทำ:**\nค่าทำความสะอาดผนัง: ผนังมี 4 ด้าน\nพื้นที่รวม 2×(ยาว×สูง)+2×(กว้าง×สูง)\n2×(10×4)+2×(6×4)=80+48=128 ตารางเมตร\nค่าใช้จ่ายผนัง = 128×50=6,400 บาท\nค่าทำความสะอาดพื้น: พื้นที่ = 10×6=60 ตารางเมตร\nค่าใช้จ่ายพื้น = 60×80=4,800 บาท\nค่าใช้จ่ายรวม = 6,400+4,800=11,200 บาท"
    }
];

// Math Runner Game Logic
let mathGame = {
    canvas: null,
    ctx: null,
    gameRunning: false,
    score: 0,
    diamonds: 0,
    speed: 1.0,
    questionsCompleted: 0,
    gameStartTime: 0,
    lastSpeedUpdate: 0,
    
    // Developer mode
    devMode: false,
    devMenuOpen: false,
    usedBackgrounds: [],
    devSpeed: null, // Developer override speed
    devOperationLock: null, // Developer operation lock
    
    // Player
    player: {
        lane: 1, // 0-3 lanes
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        isMoving: false,
        direction: 1, // 1 = right, -1 = left
        movingTimer: 0,
        bounceScale: 1.0,
        bounceTimer: 0
    },
    
    // Game mechanics
    currentOperation: '?',
    operations: ['+', '-', '×', '÷'],
    operationIndex: 0,
    isPaused: false,
    
    // Boxes
    boxes: [],
    boxSpeed: 3.0,
    
    // Special effects
    rainbowMode: false,
    rainbowTimer: 0,
    speedBoost: false,
    speedBoostTimer: 0,
    slowMode: false,
    slowTimer: 0,
    
    // Images
    boxImages: [
        'https://i.ibb.co/dwqSMDwQ/watermelon.png',
        'https://i.ibb.co/7xjJnzTR/tomato.png',
        'https://i.ibb.co/Zp4CZg6f/strawberry.png',
        'https://i.ibb.co/GfZWmWb8/orange.png',
        'https://i.ibb.co/KxVKNZBq/durian.png',
        'https://i.ibb.co/jPs5x34M/kiwi.png',
        'https://i.ibb.co/0jmpmNQs/dragonfruit.png',
        'https://i.ibb.co/kV23MN8S/carrot.png',
        'https://i.ibb.co/rRF1JCx6/blueberry.png'
    ],
    
    specialBoxes: {
        rainbow: 'https://i.ibb.co/8nXCj74f/rainbow.png',
        speed: 'https://i.ibb.co/xqWdszjs/speed.png',
        slowness: 'https://i.ibb.co/hJ33VQky/slowness.png',
        bomb: 'https://i.ibb.co/v43htZzN/bomb.png',
        diamond: 'https://i.ibb.co/TDHxR5qM/diamond.png'
    },
    
    // Diamond box system
    diamondQuestions: 0,
    diamondTimer: 0,
    diamondSpawnInterval: 2100, // 35 seconds at 60fps
    firstDiamondSpawned: false
};

function initMathRunnerGame() {
    // Set random background
    const mathRunnerGame = document.getElementById('mathRunnerActualGame');
    const mathBgs = isMobile() ? 
        ['https://i.ibb.co/xS8bqrxs/mbg1.jpg', 'https://i.ibb.co/spnx9BPb/mbg2.jpg', 'https://i.ibb.co/nssmJSyF/mbg3.jpg', 'https://i.ibb.co/Z6qxWMr8/mbg4.jpg'] :
        ['https://i.ibb.co/spB14Y3H/bg.jpg', 'https://i.ibb.co/ZRx4YLYy/bg2.jpg', 'https://i.ibb.co/bjdFvp1c/bg3.jpg', 'https://i.ibb.co/tP3TM57Z/bg4.jpg'];
    
    const randomBg = mathBgs[Math.floor(Math.random() * mathBgs.length)];
    mathRunnerGame.style.backgroundImage = `url('${randomBg}')`;
    mathRunnerGame.style.backgroundSize = 'cover';
    mathRunnerGame.style.backgroundPosition = '33.33% center'; // Start at lane 1 position
    mathRunnerGame.style.transition = 'background-position 0.2s ease-out'; // Faster transition for performance
    
    // Initialize canvas
    mathGame.canvas = document.getElementById('mathCanvas');
    mathGame.ctx = mathGame.canvas.getContext('2d');
    
    // Set canvas size to full screen
    mathGame.canvas.width = window.innerWidth;
    mathGame.canvas.height = window.innerHeight;
    mathGame.canvas.style.width = '100vw';
    mathGame.canvas.style.height = '100vh';
    
    console.log('🎮 Canvas size set to:', mathGame.canvas.width, 'x', mathGame.canvas.height);
    
    // Reset game state
    resetMathGame();
    
    // Position player
    updatePlayerPosition();
    
    // Show developer button if in dev mode
    if (mathGame.devMode) {
        document.getElementById('mathDevBtn').classList.remove('hidden');
        console.log('🔧 Math Runner Developer button enabled');
    } else {
        document.getElementById('mathDevBtn').classList.add('hidden');
    }
    
    // Start game loop
    mathGame.gameRunning = true;
    mathGameLoop();
    
    // Add event listeners
    addMathGameEventListeners();
    initMathDevEventListeners();
}

function resetMathGame() {
    mathGame.score = 0;
    mathGame.diamonds = 0;
    mathGame.speed = 1.0;
    mathGame.questionsCompleted = 0;
    mathGame.boxes = [];
    mathGame.currentOperation = '?';
    mathGame.operationIndex = 0;
    mathGame.rainbowMode = false;
    mathGame.speedBoost = false;
    mathGame.slowMode = false;
    mathGame.isPaused = false;
    mathGame.gameStartTime = Date.now(); // Track game start time
    mathGame.lastSpeedUpdate = Date.now(); // Initialize speed update timer
    
    // Reset Diamond system
    mathGame.diamondQuestions = 0;
    mathGame.diamondTimer = 0;
    mathGame.firstDiamondSpawned = false;
    
    // Reset dev settings if not in dev mode
    if (!mathGame.devMode) {
        mathGame.devSpeed = null;
        mathGame.devOperationLock = null;
    }
    
    // Reset player state completely
    mathGame.player.lane = 1; // Force to lane 1 (middle)
    mathGame.player.isMoving = false;
    mathGame.player.direction = 1;
    mathGame.player.movingTimer = 0;
    mathGame.player.bounceScale = 1.0;
    mathGame.player.bounceTimer = 0;
    
    // Reset player image and transform completely
    const playerImg = document.getElementById('playerImage');
    const playerElement = document.getElementById('mathPlayer');
    playerImg.src = 'https://i.ibb.co/4gp4jLj2/maincharater.png';
    playerImg.style.transform = 'scaleX(1)';
    playerElement.style.transform = 'scale(1.0)';
    
    // Remove all glow effects completely
    playerElement.classList.remove('player-glow-rainbow', 'player-glow-speed', 'player-glow-slow');
    
    // Force update player position after reset
    setTimeout(() => {
        mathGame.player.lane = 1; // Ensure lane is 1 again
        updatePlayerPosition();
    }, 50);
    
    updateMathUI();
    updatePlayerPosition();
}

function pauseMathGame() {
    mathGame.isPaused = true;
    document.getElementById('mathPauseMenu').classList.remove('hidden');
}

function resumeMathGame() {
    mathGame.isPaused = false;
    document.getElementById('mathPauseMenu').classList.add('hidden');
}

function showDiamondEffect() {
    const diamondEffect = document.getElementById('mathDiamondEffect');
    const diamondIcon = document.getElementById('mathDiamondIcon');
    
    // Play sparkle sound when diamond effect starts
    playMathDiamondSparkleSound();
    
    diamondEffect.classList.remove('hidden');
    diamondIcon.style.opacity = '0';
    diamondIcon.style.transform = 'scale(0.3) translateY(50px)';
    
    // Fade in and bounce up effect
    setTimeout(() => {
        diamondIcon.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        diamondIcon.style.opacity = '1';
        diamondIcon.style.transform = 'scale(1.3) translateY(-50px)';
    }, 100);
    
    // Scale down slightly and fade out
    setTimeout(() => {
        diamondIcon.style.transition = 'all 1.5s ease-out';
        diamondIcon.style.opacity = '0';
        diamondIcon.style.transform = 'scale(1.8) translateY(-150px)';
    }, 1000);
    
    // Hide after animation
    setTimeout(() => {
        diamondEffect.classList.add('hidden');
        diamondIcon.style.transition = '';
        diamondIcon.style.opacity = '1';
        diamondIcon.style.transform = 'scale(1)';
    }, 2500);
}

function showDiamondLossEffect() {
    const diamondEffect = document.getElementById('mathDiamondEffect');
    const diamondIcon = document.getElementById('mathDiamondIcon');
    
    // Change to red diamond for loss effect
    diamondIcon.innerHTML = '💔';
    diamondIcon.style.color = '#EF4444';
    
    diamondEffect.classList.remove('hidden');
    diamondIcon.style.opacity = '0';
    diamondIcon.style.transform = 'scale(0.3) translateY(50px)';
    
    // Fade in and bounce up effect (similar to gain but red)
    setTimeout(() => {
        diamondIcon.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        diamondIcon.style.opacity = '1';
        diamondIcon.style.transform = 'scale(1.3) translateY(-50px)';
    }, 100);
    
    // Scale down slightly and fade out
    setTimeout(() => {
        diamondIcon.style.transition = 'all 1.5s ease-out';
        diamondIcon.style.opacity = '0';
        diamondIcon.style.transform = 'scale(1.8) translateY(-150px)';
    }, 1000);
    
    // Hide after animation and reset to diamond
    setTimeout(() => {
        diamondEffect.classList.add('hidden');
        diamondIcon.innerHTML = '💎';
        diamondIcon.style.color = '';
        diamondIcon.style.transition = '';
        diamondIcon.style.opacity = '1';
        diamondIcon.style.transform = 'scale(1)';
    }, 2500);
}

function updateMathUI() {
    document.getElementById('mathScore').textContent = mathGame.score;
    document.getElementById('mathDiamonds').textContent = mathGame.diamonds;
    document.getElementById('mathSpeed').textContent = mathGame.speed.toFixed(1);
    document.getElementById('mathQuestions').textContent = mathGame.questionsCompleted;
    document.getElementById('currentOperation').textContent = mathGame.currentOperation;
}

function updatePlayerPosition() {
    const player = document.getElementById('mathPlayer');
    const laneWidth = mathGame.canvas.width / 4;
    const playerX = (mathGame.player.lane * laneWidth) + (laneWidth / 2) - (mathGame.player.width / 2);
    
    mathGame.player.x = playerX;
    mathGame.player.y = mathGame.canvas.height - 120; // 20px from bottom + 100px height
    
    player.style.left = playerX + 'px';
    player.style.bottom = '20px';
    
    // Update parallax background based on player position
    updateParallaxBackground();
}

function updateParallaxBackground() {
    const mathRunnerGame = document.getElementById('mathRunnerActualGame');
    
    // Calculate parallax offset based on player lane (0-3)
    // Lane 0 (leftmost) = 15% background position (not 0%)
    // Lane 3 (rightmost) = 85% background position (not 100%)
    // This creates a more subtle parallax effect without going to extreme edges
    const parallaxOffset = 15 + (mathGame.player.lane / 3) * 70; // 15% to 85% range
    
    // Apply parallax effect to background
    mathRunnerGame.style.backgroundPosition = `${parallaxOffset}% center`;
}

// Global variable to track if math event listeners are added
let mathGameListenersAdded = false;

function addMathGameEventListeners() {
    // Remove existing listeners first to prevent duplicates
    removeMathGameEventListeners();
    
    // Keyboard controls
    mathGame.keydownHandler = (e) => {
        if (!mathGame.gameRunning) return;
        
        if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
            if (!mathGame.isPaused) movePlayer(-1);
        } else if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
            if (!mathGame.isPaused) movePlayer(1);
        }
    };
    document.addEventListener('keydown', mathGame.keydownHandler);
    
    // Touch controls
    mathGame.touchStartX = 0;
    mathGame.touchStartHandler = (e) => {
        if (mathGame.isPaused) return;
        mathGame.touchStartX = e.touches[0].clientX;
    };
    
    mathGame.touchEndHandler = (e) => {
        if (mathGame.isPaused) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchEndX - mathGame.touchStartX;
        
        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) {
                movePlayer(1); // Swipe right
            } else {
                movePlayer(-1); // Swipe left
            }
        }
    };
    
    mathGame.canvas.addEventListener('touchstart', mathGame.touchStartHandler);
    mathGame.canvas.addEventListener('touchend', mathGame.touchEndHandler);
    
    // Developer button
    document.getElementById('mathDevBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleMathDevPanel();
    });
    
    // Hamburger menu button
    document.getElementById('mathHamburgerBtn').addEventListener('click', () => {
        pauseMathGame();
    });
    
    // Pause menu buttons
    document.getElementById('mathResumeBtn').addEventListener('click', () => {
        resumeMathGame();
    });
    
    document.getElementById('mathRestartBtn').addEventListener('click', () => {
        resumeMathGame();
        mathGame.gameRunning = false;
        // Remove all event listeners to prevent stacking
        removeMathGameEventListeners();
        // Clear player name and reset dev mode
        document.getElementById('mathPlayerName').value = '';
        mathGame.devMode = false;
        document.getElementById('mathDevBtn').classList.add('hidden');
        showScreen('mathRunnerGame');
        switchMusic('background'); // Switch back to background music
    });
    
    document.getElementById('mathHomeBtn').addEventListener('click', () => {
        resumeMathGame();
        mathGame.gameRunning = false;
        // Remove all event listeners to prevent stacking
        removeMathGameEventListeners();
        // Clear player name and reset dev mode
        document.getElementById('mathPlayerName').value = '';
        mathGame.devMode = false;
        document.getElementById('mathDevBtn').classList.add('hidden');
        showScreen('mainMenu');
        switchMusic('background'); // Switch back to background music
    });
    
    // Close pause menu when clicking outside
    document.getElementById('mathPauseMenu').addEventListener('click', (e) => {
        if (e.target.id === 'mathPauseMenu') {
            resumeMathGame();
        }
    });
    
    mathGameListenersAdded = true;
}

// Function to remove existing math game event listeners
function removeMathGameEventListeners() {
    if (!mathGameListenersAdded) return;
    
    // Remove keyboard listener
    if (mathGame.keydownHandler) {
        document.removeEventListener('keydown', mathGame.keydownHandler);
    }
    
    // Remove touch listeners
    if (mathGame.touchStartHandler && mathGame.touchEndHandler) {
        mathGame.canvas.removeEventListener('touchstart', mathGame.touchStartHandler);
        mathGame.canvas.removeEventListener('touchend', mathGame.touchEndHandler);
    }
    
    mathGameListenersAdded = false;
}

function movePlayer(direction) {
    if (mathGame.isPaused) return;
    
    const newLane = mathGame.player.lane + direction;
    if (newLane >= 0 && newLane <= 3) {
        mathGame.player.lane = newLane;
        mathGame.player.direction = direction;
        mathGame.player.isMoving = true;
        mathGame.player.movingTimer = 20;
        
        // Update player image and direction
        const playerImg = document.getElementById('playerImage');
        const playerElement = document.getElementById('mathPlayer');
        
        if (mathGame.player.isMoving) {
            playerImg.src = 'https://i.ibb.co/YB2NgC6r/run.png';
        }
        
        // Flip player image based on direction
        const scaleX = direction === -1 ? -1 : 1;
        playerImg.style.transform = `scaleX(${scaleX})`;
        
        // Smooth position transition
        playerElement.style.transition = 'left 0.2s ease-out';
        updatePlayerPosition();
        
        // Clear transition after animation
        setTimeout(() => {
            playerElement.style.transition = '';
        }, 200);
    }
}

function spawnDiamondBox() {
    const laneWidth = mathGame.canvas.width / 4;
    const lane = Math.floor(Math.random() * 4);
    const x = (lane * laneWidth) + (laneWidth / 2);
    
    const box = {
        x: x,
        y: -60,
        width: 60,
        height: 60,
        type: 'special',
        value: 0,
        specialType: 'diamond',
        image: mathGame.specialBoxes.diamond,
        glowEffect: 0 // For glow animation
    };
    
    mathGame.boxes.push(box);
    console.log('💎 Diamond box spawned at lane', lane, 'x:', x, 'canvas width:', mathGame.canvas.width);
}

function spawnBox() {
    const laneWidth = mathGame.canvas.width / 4;
    const lane = Math.floor(Math.random() * 4);
    const x = (lane * laneWidth) + (laneWidth / 2);
    
    // Check for nearby boxes to avoid overlap
    const minDistance = 150;
    const hasNearbyBox = mathGame.boxes.some(existingBox => {
        const sameX = Math.abs(existingBox.x - x) < laneWidth / 2;
        const tooClose = existingBox.y > -minDistance && existingBox.y < 100;
        return sameX && tooClose;
    });
    
    // Don't spawn if there's a nearby box
    if (hasNearbyBox) {
        return;
    }
    
    // Determine box type
    let boxType = 'number';
    let value = Math.floor(Math.random() * 10); // 0-9
    let specialType = null;
    
    // 10% chance for special boxes
    if (Math.random() < 0.1) {
        const specialTypes = ['rainbow', 'speed', 'slowness', 'bomb'];
        specialType = specialTypes[Math.floor(Math.random() * specialTypes.length)];
        boxType = 'special';
    }
    
    const box = {
        x: x,
        y: -60,
        width: 60,
        height: 60,
        type: boxType,
        value: value,
        specialType: specialType,
        image: boxType === 'special' ? 
            mathGame.specialBoxes[specialType] : 
            mathGame.boxImages[Math.floor(Math.random() * mathGame.boxImages.length)]
    };
    
    mathGame.boxes.push(box);
    console.log('📦 Box spawned at lane', lane, 'x:', x, 'canvas width:', mathGame.canvas.width);
}

function updateBoxes() {
    if (mathGame.isPaused) return;
    
    // Update speed based on time (0.005x per second) - unless in dev mode
    if (mathGame.devMode && mathGame.devSpeed !== null) {
        mathGame.speed = mathGame.devSpeed;
    } else {
        const elapsedSeconds = (Date.now() - mathGame.gameStartTime) / 1000;
        mathGame.speed = Math.min(2.5, 0.8 + (elapsedSeconds * 0.005));
        
        // Update UI every few seconds
        if (Date.now() - mathGame.lastSpeedUpdate >= 3000) {
            mathGame.lastSpeedUpdate = Date.now();
            updateMathUI();
        }
    }
    
    // Calculate current speed
    let currentSpeed = mathGame.boxSpeed * mathGame.speed;
    
    // Apply temporary effects
    if (mathGame.speedBoost) {
        currentSpeed += 3.0;
        mathGame.speedBoostTimer--;
        if (mathGame.speedBoostTimer <= 0) {
            mathGame.speedBoost = false;
        }
    }
    
    if (mathGame.slowMode) {
        currentSpeed = Math.max(0.5, currentSpeed - 3.0);
        mathGame.slowTimer--;
        if (mathGame.slowTimer <= 0) {
            mathGame.slowMode = false;
        }
    }
    
    // Update rainbow mode
    if (mathGame.rainbowMode) {
        mathGame.rainbowTimer--;
        if (mathGame.rainbowTimer <= 0) {
            mathGame.rainbowMode = false;
        }
    }
    
    // Update player bounce animation
    if (mathGame.player.bounceTimer > 0) {
        mathGame.player.bounceTimer--;
        mathGame.player.bounceScale = Math.max(1.0, mathGame.player.bounceScale - 0.02);
        
        const playerElement = document.getElementById('mathPlayer');
        playerElement.style.transform = `scale(${mathGame.player.bounceScale})`;
        
        if (mathGame.player.bounceTimer <= 0) {
            mathGame.player.bounceScale = 1.0;
            const playerElement = document.getElementById('mathPlayer');
            playerElement.style.transform = 'scale(1.0)';
        }
    }
    
    // Update boxes
    for (let i = mathGame.boxes.length - 1; i >= 0; i--) {
        const box = mathGame.boxes[i];
        box.y += currentSpeed;
        
        // Check collision with player
        if (checkCollision(box, mathGame.player)) {
            handleBoxCollision(box);
            mathGame.boxes.splice(i, 1);
            continue;
        }
        
        // Remove boxes that are off screen (use a larger buffer)
        if (box.y > mathGame.canvas.height + 200) {
            mathGame.boxes.splice(i, 1);
            console.log('📦 Box removed at y:', box.y, 'canvas height:', mathGame.canvas.height);
        }
    }
    
    // Spawn Diamond box first, then every 35 seconds
    if (!mathGame.firstDiamondSpawned) {
        spawnDiamondBox();
        mathGame.firstDiamondSpawned = true;
        mathGame.diamondTimer = mathGame.diamondSpawnInterval;
    } else {
        mathGame.diamondTimer--;
        if (mathGame.diamondTimer <= 0 && mathGame.diamondQuestions < 5) {
            spawnDiamondBox();
            mathGame.diamondTimer = mathGame.diamondSpawnInterval;
        }
    }
    
    // Spawn regular boxes
    if (Math.random() < 0.008) {
        spawnBox();
    }
}

function checkCollision(box, player) {
    return box.x < player.x + player.width &&
            box.x + box.width > player.x &&
            box.y < player.y + player.height &&
            box.y + box.height > player.y;
}

function handleBoxCollision(box) {
    // Player bounce effect
    mathGame.player.bounceScale = 1.3;
    mathGame.player.bounceTimer = 20;
    
    // Update player element scale
    const playerElement = document.getElementById('mathPlayer');
    playerElement.style.transform = `scale(${mathGame.player.bounceScale})`;
    
    // Play random merge sound for any box collision
    playMergeSound();
    
    if (box.type === 'special') {
        handleSpecialBox(box);
    } else {
        handleNumberBox(box);
    }
}

function handleSpecialBox(box) {
    const playerElement = document.getElementById('mathPlayer');
    
    switch (box.specialType) {
        case 'rainbow':
            mathGame.rainbowMode = true;
            mathGame.rainbowTimer = 300; // 5 seconds at 60fps
            mathGame.currentOperation = '×'; // Lock to multiply for 5 seconds
            // Add blue glow to player
            playerElement.classList.add('player-glow-rainbow');
            setTimeout(() => {
                playerElement.classList.remove('player-glow-rainbow');
            }, 5000);
            break;
        case 'speed':
            mathGame.speedBoost = true;
            mathGame.speedBoostTimer = 300; // 5 seconds at 60fps
            // Add green glow to player
            playerElement.classList.add('player-glow-speed');
            setTimeout(() => {
                playerElement.classList.remove('player-glow-speed');
            }, 5000);
            break;
        case 'slowness':
            mathGame.slowMode = true;
            mathGame.slowTimer = 300; // 5 seconds at 60fps
            // Add orange glow to player
            playerElement.classList.add('player-glow-slow');
            setTimeout(() => {
                playerElement.classList.remove('player-glow-slow');
            }, 5000);
            break;
        case 'bomb':
            mathGame.diamonds = Math.max(0, mathGame.diamonds - 3);
            // Show diamond loss effect
            showDiamondLossEffect();
            break;
        case 'diamond':
            // Show diamond question
            if (mathGame.diamondQuestions < 5) {
                showDiamondQuestion(mathGame.diamondQuestions);
            }
            break;
    }
    updateMathUI();
}

function handleNumberBox(box) {
    // Use rainbow mode operation or current operation
    let operation = mathGame.rainbowMode ? '×' : mathGame.currentOperation;
    
    if (mathGame.currentOperation === '?') {
        // First box hit, just set the operation
        mathGame.operationIndex = Math.floor(Math.random() * mathGame.operations.length);
        mathGame.currentOperation = mathGame.operations[mathGame.operationIndex];
        operation = mathGame.currentOperation;
    }
    
    // Calculate new score
    let newScore = mathGame.score;
    switch (operation) {
        case '+':
            newScore += box.value;
            break;
        case '-':
            newScore -= box.value;
            break;
        case '×':
            newScore *= box.value;
            break;
        case '÷':
            if (box.value !== 0) {
                newScore = Math.floor(newScore / box.value);
            }
            break;
    }
    
    mathGame.score = newScore;
    
    // Check for diamonds
    if (mathGame.score >= 100) {
        const diamondsGained = Math.floor(mathGame.score / 100);
        mathGame.diamonds += diamondsGained;
        mathGame.score = mathGame.score % 100;
        
        // Show diamond effect
        showDiamondEffect();
    } else if (mathGame.score <= -100) {
        const diamondsLost = Math.floor(Math.abs(mathGame.score) / 100);
        mathGame.diamonds = Math.max(0, mathGame.diamonds - diamondsLost);
        mathGame.score = mathGame.score % 100;
    }
    
    // Generate next operation (avoid repeating unless in rainbow mode or dev lock)
    if (!mathGame.rainbowMode) {
        if (mathGame.devMode && mathGame.devOperationLock !== null) {
            // Use locked operation in dev mode
            mathGame.currentOperation = mathGame.devOperationLock;
        } else {
            // Normal random operation generation
            let nextIndex;
            do {
                nextIndex = Math.floor(Math.random() * mathGame.operations.length);
            } while (nextIndex === mathGame.operationIndex);
            
            mathGame.operationIndex = nextIndex;
            mathGame.currentOperation = mathGame.operations[nextIndex];
        }
    }
    // If in rainbow mode, keep the × operation locked
    
    updateMathUI();
}

function renderMathGame() {
    mathGame.ctx.clearRect(0, 0, mathGame.canvas.width, mathGame.canvas.height);
    
    // Draw boxes
    mathGame.boxes.forEach(box => {
        const img = globalImages[box.image];
        
        // Draw box image
        if (img && img.complete) {
            mathGame.ctx.drawImage(img, box.x - box.width/2, box.y, box.width, box.height);
        } else {
            // Fallback rectangle
            mathGame.ctx.fillStyle = '#FF6B35';
            mathGame.ctx.fillRect(box.x - box.width/2, box.y, box.width, box.height);
        }
        
        // Add glow effect for diamond boxes
        if (box.specialType === 'diamond') {
            box.glowEffect = (box.glowEffect || 0) + 0.1;
            if (box.glowEffect > Math.PI * 2) box.glowEffect = 0;
            
            const glowIntensity = (Math.sin(box.glowEffect) + 1) / 2;
            mathGame.ctx.shadowColor = '#FFD700';
            mathGame.ctx.shadowBlur = 20 + (glowIntensity * 15);
            mathGame.ctx.shadowOffsetX = 0;
            mathGame.ctx.shadowOffsetY = 0;
            
            if (img && img.complete) {
                mathGame.ctx.drawImage(img, box.x - box.width/2, box.y, box.width, box.height);
            }
            
            // Reset shadow
            mathGame.ctx.shadowBlur = 0;
        }
        
        // Draw text on boxes
        mathGame.ctx.font = 'bold 20px Kanit';
        mathGame.ctx.textAlign = 'center';
        mathGame.ctx.textBaseline = 'middle';
        
        let text = '';
        if (box.type === 'number') {
            text = box.value.toString();
            
            // Text stroke for better visibility
            mathGame.ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
            mathGame.ctx.lineWidth = 3;
            mathGame.ctx.strokeText(text, box.x, box.y + box.height/2);
            
            mathGame.ctx.fillStyle = 'white';
            mathGame.ctx.fillText(text, box.x, box.y + box.height/2);
        } else {
            // Special box symbols
            switch (box.specialType) {
                case 'rainbow': text = '🌈'; break;
                case 'speed': text = '⚡'; break;
                case 'slowness': text = '🐌'; break;
                case 'bomb': text = '💣'; break;
                case 'diamond': text = '💎'; break;
            }
            
            mathGame.ctx.fillStyle = 'white';
            mathGame.ctx.fillText(text, box.x, box.y + box.height/2);
        }
    });
    
    // Update player animation
    if (mathGame.player.isMoving) {
        mathGame.player.movingTimer--;
        if (mathGame.player.movingTimer <= 0) {
            mathGame.player.isMoving = false;
            document.getElementById('playerImage').src = 'https://i.ibb.co/4gp4jLj2/maincharater.png';
        }
    }
}

function showDiamondQuestion(questionIndex) {
    const question = diamondQuestions[questionIndex];
    if (!question) return;
    
    // Pause the game
    mathGame.isPaused = true;
    
    document.getElementById('mathDiamondQuestionNumber').textContent = questionIndex + 1;
    document.getElementById('mathDiamondQuestionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('mathDiamondQuestionOptions');
    const textInputContainer = document.getElementById('mathDiamondTextInput');
    
    if (question.isTextInput) {
        // Show text input for question 5
        optionsContainer.innerHTML = '';
        optionsContainer.classList.add('hidden');
        textInputContainer.classList.remove('hidden');
        document.getElementById('mathDiamondAnswer').value = '';
    } else {
        // Show multiple choice options
        textInputContainer.classList.add('hidden');
        optionsContainer.classList.remove('hidden');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white border-2 sm:border-3 border-gray-200 rounded-xl sm:rounded-2xl hover:border-yellow-400 hover:bg-yellow-50 cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-102';
            optionDiv.innerHTML = `
                <input type="radio" name="diamondAnswer" value="${index}" id="diamondOption${index}" class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600">
                <label for="diamondOption${index}" class="flex-1 cursor-pointer text-gray-800 font-medium text-sm sm:text-lg">${option}</label>
            `;
            
            optionDiv.addEventListener('click', () => {
                // Clear previous selections
                document.querySelectorAll('input[name="diamondAnswer"]').forEach(input => {
                    input.checked = false;
                    input.parentElement.classList.remove('border-green-500', 'bg-green-50', 'shadow-xl');
                    input.parentElement.classList.add('border-gray-200', 'bg-white');
                });
                
                // Select current option
                const radio = optionDiv.querySelector('input[type="radio"]');
                radio.checked = true;
                optionDiv.classList.remove('border-gray-200', 'bg-white');
                optionDiv.classList.add('border-green-500', 'bg-green-50', 'shadow-xl');
                
                mathGame.selectedDiamondAnswer = index;
                document.getElementById('mathSubmitDiamondAnswer').disabled = false;
                document.getElementById('mathSubmitDiamondAnswer').classList.remove('opacity-50', 'cursor-not-allowed');
            });
            
            optionsContainer.appendChild(optionDiv);
        });
    }
    
    mathGame.selectedDiamondAnswer = null;
    document.getElementById('mathSubmitDiamondAnswer').disabled = true;
    document.getElementById('mathSubmitDiamondAnswer').classList.add('opacity-50', 'cursor-not-allowed');
    
    document.getElementById('mathDiamondQuestionModal').classList.remove('hidden');
}

function submitDiamondAnswer() {
    const question = diamondQuestions[mathGame.diamondQuestions];
    let userAnswer;
    let isCorrect = false;
    
    if (question.isTextInput) {
        userAnswer = parseInt(document.getElementById('mathDiamondAnswer').value);
        isCorrect = userAnswer === question.correct;
    } else {
        if (mathGame.selectedDiamondAnswer === null) return;
        userAnswer = mathGame.selectedDiamondAnswer;
        isCorrect = userAnswer === question.correct;
    }
    
    // Store answer for summary
    if (!mathGame.diamondAnswers) {
        mathGame.diamondAnswers = [];
    }
    mathGame.diamondAnswers[mathGame.diamondQuestions] = {
        userAnswer: userAnswer,
        isCorrect: isCorrect
    };
    
    // Update questions completed FIRST and update UI immediately
    mathGame.diamondQuestions++;
    mathGame.questionsCompleted = mathGame.diamondQuestions; // Sync both counters
    updateMathUI();
    
    // Always give 15 diamonds regardless of correct/incorrect
    mathGame.diamonds += 15;
    updateMathUI();
    
    // Close question modal
    document.getElementById('mathDiamondQuestionModal').classList.add('hidden');
    
    // Resume game
    mathGame.isPaused = false;
    
    // Show diamond effect
    showDiamondEffect();
    
    // Check if all questions completed
    if (mathGame.diamondQuestions >= 5) {
        setTimeout(() => {
            showDiamondSummary();
        }, 2000);
    }
}

function showDiamondSummary() {
    // Pause the game
    mathGame.isPaused = true;
    
    // Update player name with truncation
    const playerName = gameState.playerName || 'ผู้เล่น';
    const truncatedName = playerName.length > 15 ? playerName.substring(0, 15) + '...' : playerName;
    document.getElementById('mathPlayerSummaryName').textContent = truncatedName;
    
    // Calculate correct answers count
    let correctCount = 0;
    if (mathGame.diamondAnswers) {
        correctCount = mathGame.diamondAnswers.filter(answer => answer.isCorrect).length;
    }
    
    // Update summary info - show correct answers instead of total questions
    document.getElementById('mathSummaryDiamonds').textContent = mathGame.diamonds;
    document.getElementById('mathSummaryQuestions').textContent = correctCount; // Show correct count
    
    // Set score for solutions modal
    document.getElementById('mathDiamondScore').textContent = correctCount;
    
    // Play victory sound when summary appears
    playVictorySound();
    
    document.getElementById('mathDiamondSummaryModal').classList.remove('hidden');
}

function showDiamondSolutions() {
    // Hide summary modal and show solutions modal
    document.getElementById('mathDiamondSummaryModal').classList.add('hidden');
    
    // Populate solutions
    const solutionsContainer = document.getElementById('mathDiamondSolutions');
    solutionsContainer.innerHTML = '';
    
    diamondQuestions.forEach((question, index) => {
        const userAnswer = mathGame.diamondAnswers ? mathGame.diamondAnswers[index] : null;
        const isCorrect = userAnswer ? userAnswer.isCorrect : false;
        
        const solutionDiv = document.createElement('div');
        solutionDiv.className = `bg-white rounded-xl p-4 shadow-lg border-2 ${isCorrect ? 'border-green-300' : 'border-red-300'}`;
        
        let userAnswerText = '';
        if (question.isTextInput) {
            userAnswerText = userAnswer ? userAnswer.userAnswer : 'ไม่ได้ตอบ';
        } else {
            userAnswerText = userAnswer ? question.options[userAnswer.userAnswer] : 'ไม่ได้ตอบ';
        }
        
        solutionDiv.innerHTML = `
            <div class="flex items-center mb-3">
                <span class="text-lg font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}">
                    ${isCorrect ? '✅' : '❌'} ข้อที่ ${index + 1}
                </span>
            </div>
            <div class="mb-3">
                <p class="text-gray-700 font-medium">คำตอบของคุณ: <span class="${isCorrect ? 'text-green-600' : 'text-red-600'}">${userAnswerText}</span></p>
            </div>
            <div class="bg-gray-50 rounded-lg p-3">
                <p class="text-sm text-gray-600 whitespace-pre-line">${question.solution}</p>
            </div>
        `;
        
        solutionsContainer.appendChild(solutionDiv);
    });
    
    document.getElementById('mathDiamondSolutionsModal').classList.remove('hidden');
}

function mathGameLoop() {
    if (!mathGame.gameRunning) return;
    
    if (!mathGame.isPaused) {
        updateBoxes();
    }
    
    renderMathGame();
    
    requestAnimationFrame(mathGameLoop);
}

// Math Runner Developer Functions
function toggleMathDevPanel() {
    const panel = document.getElementById('mathDevPanel');
    panel.classList.toggle('hidden');
    mathGame.devMenuOpen = !mathGame.devMenuOpen;
}

function closeMathDevPanel() {
    document.getElementById('mathDevPanel').classList.add('hidden');
    mathGame.devMenuOpen = false;
}

function spawnDevBox(type) {
    const laneWidth = mathGame.canvas.width / 4;
    const lane = Math.floor(Math.random() * 4);
    const x = (lane * laneWidth) + (laneWidth / 2);
    
    let box;
    if (type === 'number') {
        box = {
            x: x,
            y: -60,
            width: 60,
            height: 60,
            type: 'number',
            value: Math.floor(Math.random() * 10),
            specialType: null,
            image: mathGame.boxImages[Math.floor(Math.random() * mathGame.boxImages.length)]
        };
    } else {
        box = {
            x: x,
            y: -60,
            width: 60,
            height: 60,
            type: 'special',
            value: 0,
            specialType: type,
            image: mathGame.specialBoxes[type]
        };
    }
    
    mathGame.boxes.push(box);
    console.log('🔧 Dev box spawned:', type, 'at lane', lane, 'x:', x, 'canvas width:', mathGame.canvas.width);
}

function setMathGameSpeed(speed) {
    if (mathGame.devMode) {
        mathGame.devSpeed = parseFloat(speed);
        mathGame.speed = mathGame.devSpeed;
    } else {
        mathGame.speed = parseFloat(speed);
    }
    updateMathUI();
}

function randomMathBackground() {
    const mathBgs = isMobile() ? 
        ['https://i.ibb.co/xS8bqrxs/mbg1.jpg', 'https://i.ibb.co/spnx9BPb/mbg2.jpg', 'https://i.ibb.co/nssmJSyF/mbg3.jpg', 'https://i.ibb.co/Z6qxWMr8/mbg4.jpg'] :
        ['https://i.ibb.co/spB14Y3H/bg.jpg', 'https://i.ibb.co/ZRx4YLYy/bg2.jpg', 'https://i.ibb.co/bjdFvp1c/bg3.jpg', 'https://i.ibb.co/tP3TM57Z/bg4.jpg'];
    
    // Get unused backgrounds
    const availableBgs = mathBgs.filter(bg => !mathGame.usedBackgrounds.includes(bg));
    
    // If all backgrounds used, reset the list
    if (availableBgs.length === 0) {
        mathGame.usedBackgrounds = [];
        availableBgs.push(...mathBgs);
    }
    
    // Pick random from available
    const randomBg = availableBgs[Math.floor(Math.random() * availableBgs.length)];
    mathGame.usedBackgrounds.push(randomBg);
    
    // Apply background with parallax settings
    const mathRunnerGame = document.getElementById('mathRunnerActualGame');
    mathRunnerGame.style.backgroundImage = `url('${randomBg}')`;
    mathRunnerGame.style.backgroundSize = 'cover';
    mathRunnerGame.style.transition = 'background-position 0.3s ease-out';
    
    // Update parallax position based on current player lane
    updateParallaxBackground();
    
    console.log('🎨 Changed background to:', randomBg);
}

function setMathOperationLock(operation) {
    mathGame.devOperationLock = operation;
    mathGame.currentOperation = operation;
    updateMathUI();
    console.log(`🔒 Operation locked to: ${operation}`);
}

function updateMathOperationButtons() {
    // Reset all buttons
    document.querySelectorAll('.math-op-btn').forEach(btn => {
        btn.classList.remove('bg-blue-300', 'ring-2', 'ring-blue-500');
        btn.classList.add('bg-gray-100');
    });
    
    // Highlight locked operation
    if (mathGame.devOperationLock) {
        const lockedBtn = document.querySelector(`[data-op="${mathGame.devOperationLock}"]`);
        if (lockedBtn) {
            lockedBtn.classList.remove('bg-gray-100');
            lockedBtn.classList.add('bg-blue-300', 'ring-2', 'ring-blue-500');
        }
    }
}

function initMathDevEventListeners() {
    if (!mathGame.devMode) return;
    
    // Close dev panel button
    document.getElementById('closeMathDevPanelBtn').addEventListener('click', () => {
        closeMathDevPanel();
    });
    
    // Box spawn buttons
    document.querySelectorAll('.math-spawn-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            spawnDevBox(type);
        });
    });
    
    // Speed slider
    const speedSlider = document.getElementById('mathSpeedSlider');
    const speedValue = document.getElementById('mathSpeedValue');
    
    speedSlider.addEventListener('input', (e) => {
        const speed = parseFloat(e.target.value);
        speedValue.textContent = speed.toFixed(1);
        setMathGameSpeed(speed);
    });
    
    // Random background button
    document.getElementById('mathRandomBgBtn').addEventListener('click', () => {
        randomMathBackground();
    });
    
    // Operation lock buttons
    document.querySelectorAll('.math-op-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const operation = btn.dataset.op;
            setMathOperationLock(operation);
            updateMathOperationButtons();
        });
    });
    
    // Unlock operation button
    document.getElementById('mathUnlockOpBtn').addEventListener('click', () => {
        mathGame.devOperationLock = null;
        updateMathOperationButtons();
        console.log('🔓 Operation unlocked - back to random');
    });
    
    // Exit dev mode button
    document.getElementById('mathExitDevBtn').addEventListener('click', () => {
        closeMathDevPanel();
        mathGame.gameRunning = false;
        mathGame.devMode = false;
        mathGame.devSpeed = null; // Reset dev speed override
        mathGame.devOperationLock = null; // Reset operation lock
        document.getElementById('mathPlayerName').value = '';
        document.getElementById('mathDevBtn').classList.add('hidden');
        showScreen('mathRunnerGame');
        switchMusic('background'); // Switch back to background music
    });
    
    // Diamond question event listeners - moved to global scope
    console.log('🔧 Dev mode diamond question listeners initialized');
    
    // Diamond summary buttons handled in global scope
}

// Science Fight Game Logic
let scienceGame = {
    currentLevel: 1,
    hearts: 3,
    diamonds: 0,
    enemyDiamonds: 12,
    correctAnswers: 0,
    gameRunning: false,
    isPaused: false,
    isAnswering: false,
    currentOptions: [],
    correctAnswer: null,
    selectedOption: null,
    
    // Level data
    levels: [
        {
            level: 1,
            enemyImage: 'https://i.ibb.co/Nny59VZW/boss-Level1.png',
            mobileBg: 'https://i.ibb.co/NdZjYhF4/mbg1.png',
            pcBg: 'https://i.ibb.co/svpmkphw/pcbg1.png',
            hearts: 3,
            enemyDiamonds: 12,
            heartDamage: 1,
            question: "ในการสื่อสารระหว่างฐานทหารชายแดนกับศูนย์บัญชาการ ต้องใช้คลื่นวิทยุ คลื่นประเภทใดเหมาะสมที่สุด?",
            options: [
                "ก. คลื่นไมโครเวฟ",
                "ข. คลื่นวิทยุความถี่สูง (HF)",
                "ค. คลื่นอินฟราเรด",
                "ง. คลื่นเสียงธรรมดา"
            ],
            correct: 1, // ข
            explanation: "คลื่นวิทยุความถี่สูง (HF) สามารถเดินทางได้ไกลและทะลุผ่านสิ่งกีดขวางได้ดี เหมาะสำหรับการสื่อสารระยะไกล"
        },
        {
            level: 2,
            enemyImage: 'https://i.ibb.co/5h5QKpmx/boss-Level2.png',
            mobileBg: 'https://i.ibb.co/Pv6GpKBc/mbg2.png',
            pcBg: 'https://i.ibb.co/5XJC2BFT/pcbg2.png',
            hearts: 3,
            enemyDiamonds: 16,
            heartDamage: 2,
            question: "หากทหารใช้โดรนบินถ่ายภาพแนวชายแดน ซึ่งต้องบินขึ้นและลงหลายครั้ง พลังงานในแบตเตอรี่จะเปลี่ยนรูปจากเคมีเป็นพลังงานใด",
            options: [
                "ก. พลังงานศักย์โน้มถ่วง",
                "ข. พลังงานกล",
                "ค. พลังงานแสง",
                "ง. พลังงานจลน์ของคลื่น"
            ],
            correct: 1, // ข
            explanation: "มอเตอร์ในโดรนแปลงพลังงานเคมีในแบตเตอรี่ให้เป็นพลังงานกลเพื่อหมุนใบพัด"
        },
        {
            level: 3,
            enemyImage: 'https://i.ibb.co/7JbjGzD3/boss-Level3.png',
            mobileBg: 'https://i.ibb.co/6RM1mF1s/mbg3.png',
            pcBg: 'https://i.ibb.co/G3vFkwcH/pcbg3.png',
            hearts: 3,
            enemyDiamonds: 20,
            heartDamage: 2,
            question: "แหล่งน้ำตามแนวชายแดนหากน้ำในพื้นที่พิพาทมีค่า pH ต่ำลง ปัจจัยใดเป็นไปได้มากที่สุด",
            options: [
                "ก. การสะสมของแอมโมเนีย",
                "ข. การรั่วไหลของน้ำมัน",
                "ค. ฝนกรดจากการเผาไหม้เชื้อเพลิง",
                "ง. การตกตะกอนของแคลเซียม"
            ],
            correct: 2, // ค
            explanation: "NO₂ และ SO₂ จากการเผาไหม้รวมกับน้ำฝนทำให้เกิดกรดไนตริกและกรดซัลฟิวริก ส่งผลให้น้ำเป็นกรด"
        },
        {
            level: 4,
            enemyImage: 'https://i.ibb.co/nMWj8RTG/boss-Level4.png',
            mobileBg: 'https://i.ibb.co/8pYKy0c/mbg4.png',
            pcBg: 'https://i.ibb.co/4ZZhb2LW/pcbg4.png',
            hearts: 3,
            enemyDiamonds: 24,
            heartDamage: 2,
            hasArticle: true,
            articleTitle: "หินกับโบราณสถานในพื้นที่พิพาทชายแดนไทย–กัมพูชา",
            articleContent: `บริเวณชายแดนระหว่างประเทศไทยและประเทศกัมพูชาประกอบด้วยโบราณสถานสำคัญหลายแห่งที่สร้างขึ้นจากหินทราย ได้แก่ ปราสาทตาเมือนโต๊ด, ปราสาทตาเมือนธม, ปราสาทตาควาย และบริเวณสามเหลี่ยมมรกต ซึ่งเป็นพื้นที่ที่ทั้งสองประเทศเคยมีข้อพิพาทด้านเขตแดน

โบราณสถานเหล่านี้สร้างขึ้นจากหินทรายซึ่งเป็นหินตะกอน (Sedimentary rock) เกิดจากการทับถมของเม็ดทรายที่ถูกน้ำลมหรือแรงโน้มถ่วงพัดพามารวมกัน และยึดแน่นโดยแร่ธรรมชาติเช่น ซิลิกา หรือแคลไซต์ จนกลายเป็นหินแข็ง แหล่งหินทรายมักอยู่ใกล้แม่น้ำหรือภูเขาที่มีการผุพังทางกายภาพ

อย่างไรก็ตาม หินทรายแม้จะมีความแข็งแรงพอสมควรแต่ก็ไวต่อการผุพัง โดยเฉพาะจากฝนกรด (Acid rain) ซึ่งเกิดจากก๊าซซัลเฟอร์ไดออกไซด์ (SO₂) และไนโตรเจนออกไซด์ (NO₂) รวมตัวกับน้ำในชั้นบรรยากาศ กัดกร่อนชั้นผิวของหิน ก่อให้เกิดความเสียหายกับโบราณสถาน`,
            question: "จากบทความหากคุณเป็นนักธรณีวิทยาที่ต้องวางแผนฟื้นฟูปราสาทตาเมือนธม ซึ่งเสื่อมสภาพจากฝนกรด คุณควรเสนอวิธีแก้ปัญหาอย่างไรเพื่อรักษาหินทรายไม่ให้ถูกกัดกร่อนมากขึ้น",
            options: [
                "ก. ใช้น้ำยาทำความสะอาดที่มีฤทธิ์เป็นกรดเพื่อล้างคราบดำ",
                "ข. ฉีดน้ำแรงดันสูงทุกสัปดาห์เพื่อล้างมลพิษ",
                "ค. เคลือบผิวหินด้วยสารกันซึมชนิดพิเศษที่มีคุณสมบัติเป็นกลาง",
                "ง. ติดพัดลมดูดอากาศรอบปราสาทเพื่อระบายอากาศชื้น"
            ],
            correct: 2, // ค
            explanation: "การเคลือบผิวหินด้วยสารที่ช่วยป้องกันความชื้นและสารเคมีสามารถลดการสัมผัสของหินกับฝนกรดได้โดยไม่ทำให้เนื้อหินเปลี่ยนแปลง"
        },
        {
            level: 5,
            enemyImage: 'https://i.ibb.co/xq4cTt5C/boss-Level5.png',
            mobileBg: 'https://i.ibb.co/3yvp4Ywd/mbg5.png',
            pcBg: 'https://i.ibb.co/JR4V5vDp/pcbg5.png',
            hearts: 3,
            enemyDiamonds: 28,
            heartDamage: 2,
            hasArticle: true,
            articleTitle: "ดาราศาสตร์กับการกำหนดเขตแดน",
            articleContent: `ในอดีต การกำหนดเขตแดนระหว่างประเทศที่ไม่มีพรมแดนธรรมชาติชัดเจน เช่น แม่น้ำหรือภูเขา มักอาศัยความรู้ทางดาราศาสตร์เป็นเครื่องมือสำคัญ โดยเฉพาะการใช้ ลองจิจูด (ลองติจูด) และละติจูด ซึ่งเป็นค่าพิกัดที่อิงกับตำแหน่งของดวงอาทิตย์และการหมุนของโลก

เส้นละติจูด (Latitude) คือ เส้นที่ขนานกับเส้นศูนย์สูตร ใช้ระบุระยะทางเหนือ-ใต้ของตำแหน่งหนึ่งบนโลก ส่วนเส้นลองจิจูด (Longitude) คือเส้นที่ลากจากขั้วโลกเหนือไปขั้วโลกใต้ ใช้ระบุระยะทางตะวันออก-ตะวันตก โดยมีเส้นเมอริเดียนหลักผ่านเมืองกรีนิช ประเทศอังกฤษ

แม้ปัจจุบันจะมี GPS (Global Positioning System) ที่ใช้ดาวเทียมในการหาตำแหน่งอย่างแม่นยำ แต่ในอดีต การคำนวณลองจิจูดต้องอาศัยความรู้ทางดาราศาสตร์ เช่น การวัดตำแหน่งของดวงดาว เวลาเที่ยงท้องถิ่น หรือการใช้เงาของดวงอาทิตย์

บริเวณ "สามเหลี่ยมมรกต" ซึ่งเป็นจุดรอยต่อของไทย–ลาว–กัมพูชา หากไม่มีการกำหนดเขตแดนอย่างแม่นยำโดยใช้พิกัดดาราศาสตร์ อาจเกิดข้อพิพาทระหว่างประเทศได้`,
            question: "จากบทความ ในอดีตการหาลองจิจูดของตำแหน่งบนโลกมักใช้วิธีใดที่เกี่ยวข้องกับดาราศาสตร์",
            options: [
                "ก. การคำนวณจากขนาดของเงา",
                "ข. การนับจำนวนชั่วโมงในหนึ่งวัน",
                "ค. การวัดตำแหน่งดวงดาวในเวลาที่รู้แน่นอน",
                "ง. การสังเกตการขึ้น–ตกของพระจันทร์"
            ],
            correct: 2, // ค
            explanation: "นักเดินเรือโบราณใช้เวลาที่แน่นอน (จากนาฬิกาหรือจุดอ้างอิง) เทียบกับตำแหน่งของดวงดาว เพื่อคำนวณลองจิจูด"
        }
    ],
    
    // Track diamonds earned per level
    levelDiamonds: []
};

// Science Fight Loading Function
function showScienceFightLoading() {
    // Show loading screen with same background as initial loading
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingBar = document.getElementById('loadingBar');
    const loadingText = document.getElementById('loadingText');
    
    // Reset loading bar
    loadingBar.style.width = '0%';
    loadingText.textContent = 'กำลังโหลด Science Fight... 0%';
    
    // Show loading screen
    showScreen('loadingScreen');
    
    // Science Fight specific images to load
    const scienceFightImages = [
        // Science Fight images
        'https://i.ibb.co/1tsZyVD9/player.png',
        'https://i.ibb.co/Nny59VZW/boss-Level1.png',
        'https://i.ibb.co/5h5QKpmx/boss-Level2.png',
        'https://i.ibb.co/7JbjGzD3/boss-Level3.png',
        'https://i.ibb.co/nMWj8RTG/boss-Level4.png',
        'https://i.ibb.co/xq4cTt5C/boss-Level5.png',
        // Science Fight backgrounds - Mobile
        'https://i.ibb.co/NdZjYhF4/mbg1.png',
        'https://i.ibb.co/Pv6GpKBc/mbg2.png',
        'https://i.ibb.co/6RM1mF1s/mbg3.png',
        'https://i.ibb.co/8pYKy0c/mbg4.png',
        'https://i.ibb.co/3yvp4Ywd/mbg5.png',
        // Science Fight backgrounds - PC
        'https://i.ibb.co/svpmkphw/pcbg1.png',
        'https://i.ibb.co/5XJC2BFT/pcbg2.png',
        'https://i.ibb.co/G3vFkwcH/pcbg3.png',
        'https://i.ibb.co/4ZZhb2LW/pcbg4.png',
        'https://i.ibb.co/JR4V5vDp/pcbg5.png'
    ];
    
    let loadedCount = 0;
    const totalImages = scienceFightImages.length;
    
    // Load images that aren't already loaded
    const imagesToLoad = scienceFightImages.filter(src => !globalImages[src]);
    
    if (imagesToLoad.length === 0) {
        // All images already loaded - set background and show Science Fight
        setScienceFightBackground();
        setTimeout(() => {
            showScreen('scienceFightGame');
            resumeBackgroundMusic(); // Resume music when entering Science Fight
        }, 500);
        return;
    }
    
    imagesToLoad.forEach(src => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = () => {
            globalImages[src] = img;
            loadedCount++;
            const progress = Math.round((loadedCount / imagesToLoad.length) * 100);
            loadingBar.style.width = progress + '%';
            loadingText.textContent = `กำลังโหลด Science Fight... ${progress}%`;
            
            if (loadedCount === imagesToLoad.length) {
                console.log('✅ โหลดรูปภาพ Science Fight เสร็จแล้ว');
                // Set background before showing screen
                setScienceFightBackground();
                setTimeout(() => {
                    showScreen('scienceFightGame');
                    resumeBackgroundMusic(); // Resume music when entering Science Fight
                }, 500);
            }
        };
        
        img.onerror = () => {
            console.warn('⚠️ ไม่สามารถโหลดรูปภาพ Science Fight:', src);
            loadedCount++;
            const progress = Math.round((loadedCount / imagesToLoad.length) * 100);
            loadingBar.style.width = progress + '%';
            loadingText.textContent = `กำลังโหลด Science Fight... ${progress}%`;
            
            if (loadedCount === imagesToLoad.length) {
                console.log('✅ โหลดรูปภาพ Science Fight เสร็จแล้ว (บางรูปอาจโหลดไม่ได้)');
                // Set background before showing screen
                setScienceFightBackground();
                setTimeout(() => {
                    showScreen('scienceFightGame');
                    resumeBackgroundMusic(); // Resume music when entering Science Fight
                }, 500);
            }
        };
        
        img.src = src;
    });
}

// Function to set Science Fight background
function setScienceFightBackground() {
    const scienceFightGame = document.getElementById('scienceFightGame');
    const scienceBg = isMobile() ? 
        'https://i.ibb.co/NdZjYhF4/mbg1.png' :
        'https://i.ibb.co/svpmkphw/pcbg1.png';
    
    scienceFightGame.style.backgroundImage = `url('${scienceBg}')`;
    scienceFightGame.style.backgroundSize = 'cover';
    scienceFightGame.style.backgroundPosition = 'center';
    console.log('✅ ตั้งค่าพื้นหลัง Science Fight:', scienceBg);
}

function initScienceFightGame() {
    console.log('🔬 Initializing Science Fight Game');
    
    // Reset game state
    resetScienceGame();
    console.log('🔬 Game state reset');
    
    // Set game background
    setScienceFightGameBackground();
    console.log('🔬 Background set');
    
    // Update UI
    updateScienceUI();
    console.log('🔬 UI updated');
    
    // Show first question
    showScienceQuestion();
    console.log('🔬 Question shown');
    
    // Add event listeners
    addScienceGameEventListeners();
    console.log('🔬 Event listeners added');
    
    scienceGame.gameRunning = true;
    console.log('🔬 Science Fight Game initialized successfully');
}

function resetScienceGame() {
    scienceGame.currentLevel = 1;
    const levelData = scienceGame.levels[0];
    scienceGame.hearts = levelData.hearts;
    scienceGame.diamonds = 0;
    scienceGame.enemyDiamonds = levelData.enemyDiamonds;
    scienceGame.correctAnswers = 0;
    scienceGame.isPaused = false;
    scienceGame.isAnswering = false;
    // Initialize levelDiamonds array with initial enemy diamond values
    scienceGame.levelDiamonds = [12, 16, 20, 24, 28]; // Initial enemy diamonds for each level
}

function setScienceFightGameBackground() {
    const gameScreen = document.getElementById('scienceFightActualGame');
    const levelData = scienceGame.levels[scienceGame.currentLevel - 1];
    const bg = isMobile() ? levelData.mobileBg : levelData.pcBg;
    
    gameScreen.style.backgroundImage = `url('${bg}')`;
    gameScreen.style.backgroundSize = 'cover';
    gameScreen.style.backgroundPosition = 'center';
}

function updateScienceUI() {
    document.getElementById('scienceLevel').textContent = scienceGame.currentLevel;
    
    // Update hearts display - show diamonds when no hearts left
    const heartsElement = document.getElementById('scienceHearts');
    const heartsContainer = heartsElement.parentElement;
    
    if (scienceGame.hearts > 0) {
        // Show hearts normally
        heartsContainer.className = 'text-white font-bold text-base sm:text-xl bg-red-600 bg-opacity-80 px-3 sm:px-4 py-2 rounded flex items-center';
        heartsContainer.innerHTML = '❤️ <span id="scienceHearts">' + scienceGame.hearts + '</span>';
    } else {
        // Show diamonds instead when no hearts left
        heartsContainer.className = 'text-white font-bold text-base sm:text-xl bg-purple-600 bg-opacity-80 px-3 sm:px-4 py-2 rounded flex items-center';
        heartsContainer.innerHTML = '💎 <span id="scienceHearts">' + scienceGame.diamonds + '</span>';
    }
    
    document.getElementById('scienceDiamonds').textContent = scienceGame.diamonds;
    document.getElementById('scienceEnemyDiamondCount').textContent = scienceGame.enemyDiamonds;
    
    // Update enemy image
    const levelData = scienceGame.levels[scienceGame.currentLevel - 1];
    document.getElementById('scienceEnemyImage').src = levelData.enemyImage;
}

function showScienceQuestion() {
    if (scienceGame.isAnswering) return;
    
    const levelData = scienceGame.levels[scienceGame.currentLevel - 1];
    
    // Update question text in the game UI
    document.getElementById('scienceQuestionText').textContent = levelData.question;
    
    // Show/hide article button for levels 4 and 5
    const articleBtn = document.getElementById('scienceArticleBtn');
    if (levelData.hasArticle) {
        articleBtn.classList.remove('hidden');
    } else {
        articleBtn.classList.add('hidden');
    }
    
    // Store options for later use
    scienceGame.currentOptions = levelData.options;
    scienceGame.correctAnswer = levelData.correct;
    
    console.log('🔬 Science Question loaded:', levelData.question);
    console.log('🔬 Options:', levelData.options);
}

function showOptionDetail(optionIndex) {
    console.log('🔬 showOptionDetail called with index:', optionIndex);
    console.log('🔬 isAnswering:', scienceGame.isAnswering);
    console.log('🔬 currentOptions:', scienceGame.currentOptions);
    
    if (scienceGame.isAnswering) {
        console.log('🔬 Game is answering, returning');
        return;
    }
    
    if (!scienceGame.currentOptions || !scienceGame.currentOptions[optionIndex]) {
        console.log('🔬 No options available or invalid index');
        return;
    }
    
    const optionLetters = ['ก.', 'ข.', 'ค.', 'ง.'];
    const optionText = scienceGame.currentOptions[optionIndex];
    
    console.log('🔬 Setting option letter:', optionLetters[optionIndex]);
    console.log('🔬 Setting option text:', optionText);
    
    document.getElementById('scienceOptionLetter').textContent = optionLetters[optionIndex];
    document.getElementById('scienceOptionDetail').textContent = optionText;
    
    // Store selected option for confirmation
    scienceGame.selectedOption = optionIndex;
    
    console.log('🔬 Showing option modal');
    document.getElementById('scienceOptionModal').classList.remove('hidden');
}

function confirmScienceAnswer() {
    if (scienceGame.isAnswering || scienceGame.selectedOption === null) return;
    
    scienceGame.isAnswering = true;
    document.getElementById('scienceOptionModal').classList.add('hidden');
    
    const isCorrect = scienceGame.selectedOption === scienceGame.correctAnswer;
    
    if (isCorrect) {
        // Show correct answer with explanation and next level button
        showCorrectAnswerModal();
    } else {
        // Show simple wrong message
        showWrongAnswerMessage();
    }
}

function showCorrectAnswerModal() {
    const levelData = scienceGame.levels[scienceGame.currentLevel - 1];
    
    // Play correct answer sound
    playScienceCorrectSound();
    
    // Create correct answer modal
    const modal = document.createElement('div');
    modal.id = 'scienceCorrectModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl w-full mx-4 shadow-2xl border-2 sm:border-4 border-green-200">
            <div class="text-center mb-6">
                <div class="text-3xl sm:text-4xl font-bold text-green-600 mb-4">✓ ถูกต้อง!</div>
                <div class="bg-white rounded-xl p-4 shadow-lg border border-green-200">
                    <p class="text-base sm:text-lg text-gray-800 leading-relaxed">${levelData.explanation}</p>
                </div>
            </div>
            
            <div class="flex justify-center">
                <button id="scienceNextLevelBtn" class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Level ถัดไป ➡️
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listener for next level button
    document.getElementById('scienceNextLevelBtn').addEventListener('click', () => {
        document.body.removeChild(modal);
        // Directly proceed to next level instead of calling processScienceAnswer again
        nextScienceLevel();
    });
}

function showWrongAnswerMessage() {
    // Show simple wrong message
    const resultMessage = document.createElement('div');
    resultMessage.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-6 py-4 rounded-2xl text-white font-bold shadow-2xl bg-red-500';
    resultMessage.innerHTML = `<div class="text-2xl">✗ ผิด!</div>`;
    
    document.body.appendChild(resultMessage);
    
    // Remove message and process answer after delay
    setTimeout(() => {
        document.body.removeChild(resultMessage);
        processScienceAnswer(false);
    }, 2000);
}

function cancelScienceAnswer() {
    document.getElementById('scienceOptionModal').classList.add('hidden');
    scienceGame.selectedOption = null;
}

function showScienceArticle() {
    const levelData = scienceGame.levels[scienceGame.currentLevel - 1];
    
    if (levelData.hasArticle) {
        document.getElementById('scienceArticleTitle').textContent = levelData.articleTitle;
        document.getElementById('scienceArticleContent').textContent = levelData.articleContent;
        document.getElementById('scienceArticleModal').classList.remove('hidden');
    }
}

function processScienceAnswer(isCorrect) {
    const levelData = scienceGame.levels[scienceGame.currentLevel - 1];
    
    if (isCorrect) {
        // Correct answer - get remaining enemy diamonds
        const diamondsEarned = scienceGame.enemyDiamonds;
        scienceGame.diamonds += diamondsEarned;
        scienceGame.correctAnswers++;
        
        // Track diamonds earned in this level (remaining enemy diamonds)
        scienceGame.levelDiamonds[scienceGame.currentLevel - 1] = diamondsEarned;
        
        // Show victory animation
        showScienceVictory();
        
        // Don't automatically proceed - let the modal handle it
        // The modal will call nextScienceLevel() when button is clicked
    } else {
        // Wrong answer
        if (scienceGame.hearts > 0) {
            // Still have hearts - lose hearts based on level damage
            scienceGame.hearts = Math.max(0, scienceGame.hearts - levelData.heartDamage);
            scienceGame.enemyDiamonds = Math.max(0, scienceGame.enemyDiamonds - 3);
        } else {
            // No hearts left - deduct 10 diamonds (can go negative)
            scienceGame.diamonds -= 10;
            // Enemy diamonds reduced to 0 when player has no hearts
            scienceGame.enemyDiamonds = 0;
        }
        
        // Track diamonds remaining for wrong answers too
        scienceGame.levelDiamonds[scienceGame.currentLevel - 1] = scienceGame.enemyDiamonds;
        
        // Show attack animation
        showScienceAttack();
        
        setTimeout(() => {
            // Always continue with same question - never show summary automatically
            scienceGame.isAnswering = false;
            updateScienceUI();
            showScienceQuestion();
        }, 2000);
    }
}

function showScienceVictory() {
    // Player victory animation - simple scale effect
    const player = document.getElementById('sciencePlayer');
    player.style.transform = 'scale(1.2)';
    player.style.transition = 'transform 0.5s ease';
    
    setTimeout(() => {
        player.style.transform = 'scale(1)';
    }, 1000);
}

function showScienceAttack() {
    // Play boss attack sound
    playScienceBossAttackSound();
    
    // Enemy attack animation with parallax zoom
    const enemy = document.getElementById('scienceEnemy');
    const player = document.getElementById('sciencePlayer');
    const gameScreen = document.getElementById('scienceFightActualGame');
    
    // Enemy moves towards player
    enemy.style.transform = 'translateX(-50px) scale(1.1)';
    enemy.style.transition = 'transform 0.8s ease';
    
    // Parallax zoom effect
    gameScreen.style.transform = 'scale(1.05)';
    gameScreen.style.transition = 'transform 0.8s ease';
    
    // Player gets hit effect
    setTimeout(() => {
        player.style.transform = 'translateX(20px) scale(0.9)';
        player.style.filter = 'brightness(0.7) sepia(1) hue-rotate(320deg)'; // Red tint
        player.style.transition = 'all 0.3s ease';
    }, 400);
    
    // Reset positions
    setTimeout(() => {
        enemy.style.transform = 'translateX(0) scale(1)';
        player.style.transform = 'translateX(0) scale(1)';
        player.style.filter = 'none';
        gameScreen.style.transform = 'scale(1)';
    }, 1200);
}

function showLevelLoading(nextLevel) {
    // Show level loading screen
    document.getElementById('loadingLevelNumber').textContent = nextLevel;
    showScreen('scienceLevelLoading');
    
    // Animate loading bar
    const loadingBar = document.getElementById('levelLoadingBar');
    loadingBar.style.width = '0%';
    
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15 + 5; // Random progress between 5-20%
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // After loading completes, go to next level
            setTimeout(() => {
                scienceGame.currentLevel = nextLevel;
                scienceGame.enemyDiamonds = 12; // Reset enemy diamonds
                setScienceFightGameBackground();
                updateScienceUI();
                showScienceQuestion();
                showScreen('scienceFightActualGame');
            }, 500);
        }
        loadingBar.style.width = progress + '%';
    }, 200);
}

function nextScienceLevel() {
    // Reset answering state
    scienceGame.isAnswering = false;
    
    if (scienceGame.currentLevel < scienceGame.levels.length) {
        // Show loading screen for next level
        showLevelLoading(scienceGame.currentLevel + 1);
    } else {
        // All levels completed - show summary
        showScienceSummary();
    }
}

function showLevelLoading(nextLevel) {
    // Show level loading screen
    document.getElementById('loadingLevelNumber').textContent = nextLevel;
    showScreen('scienceLevelLoading');
    
    // Animate loading bar
    const loadingBar = document.getElementById('levelLoadingBar');
    loadingBar.style.width = '0%';
    
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15 + 5; // Random progress between 5-20%
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // After loading completes, go to next level
            setTimeout(() => {
                scienceGame.currentLevel = nextLevel;
                const levelData = scienceGame.levels[scienceGame.currentLevel - 1];
                
                // Reset hearts and enemy diamonds for new level
                scienceGame.hearts = levelData.hearts;
                scienceGame.enemyDiamonds = levelData.enemyDiamonds;
                
                setScienceFightGameBackground();
                updateScienceUI();
                showScienceQuestion();
                showScreen('scienceFightActualGame');
            }, 500);
        }
        loadingBar.style.width = progress + '%';
    }, 200);
}

function showScienceSummary() {
    // Update summary data
    const playerName = gameState.playerName || 'ผู้เล่น';
    const truncatedName = playerName.length > 15 ? playerName.substring(0, 15) + '...' : playerName;
    
    // Calculate total diamonds from all levels (sum of remaining enemy diamonds)
    const totalDiamondsFromLevels = scienceGame.levelDiamonds.reduce((sum, diamonds) => sum + (diamonds || 0), 0);
    
    document.getElementById('sciencePlayerSummaryName').textContent = truncatedName;
    document.getElementById('scienceSummaryDiamonds').textContent = totalDiamondsFromLevels;
    document.getElementById('scienceSummaryCorrect').textContent = 'ทำครบทั้งหมด 5 โจทย์';
    document.getElementById('scienceSummaryLevels').textContent = scienceGame.currentLevel;
    
    // Play victory sound when summary appears
    playVictorySound();
    
    document.getElementById('scienceSummaryModal').classList.remove('hidden');
}

function addScienceGameEventListeners() {
    // Option box click handlers with debug logging
    document.getElementById('scienceOptionA').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('🔬 Option A clicked');
        showOptionDetail(0);
    });
    
    document.getElementById('scienceOptionB').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('🔬 Option B clicked');
        showOptionDetail(1);
    });
    
    document.getElementById('scienceOptionC').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('🔬 Option C clicked');
        showOptionDetail(2);
    });
    
    document.getElementById('scienceOptionD').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('🔬 Option D clicked');
        showOptionDetail(3);
    });
    
    // Article button
    document.getElementById('scienceArticleBtn').addEventListener('click', () => {
        showScienceArticle();
    });
    
    document.getElementById('scienceCloseArticleBtn').addEventListener('click', () => {
        document.getElementById('scienceArticleModal').classList.add('hidden');
    });
    
    // Close article modal when clicking outside
    document.getElementById('scienceArticleModal').addEventListener('click', (e) => {
        if (e.target.id === 'scienceArticleModal') {
            document.getElementById('scienceArticleModal').classList.add('hidden');
        }
    });
    
    // Modal buttons
    document.getElementById('scienceConfirmAnswer').addEventListener('click', () => {
        confirmScienceAnswer();
    });
    
    document.getElementById('scienceCancelAnswer').addEventListener('click', () => {
        cancelScienceAnswer();
    });
    
    // Hamburger menu
    document.getElementById('scienceHamburgerBtn').addEventListener('click', () => {
        scienceGame.isPaused = true;
        document.getElementById('sciencePauseMenu').classList.remove('hidden');
    });
    
    // Pause menu buttons
    document.getElementById('scienceResumeBtn').addEventListener('click', () => {
        scienceGame.isPaused = false;
        document.getElementById('sciencePauseMenu').classList.add('hidden');
    });
    
    document.getElementById('scienceRestartBtn').addEventListener('click', () => {
        document.getElementById('sciencePauseMenu').classList.add('hidden');
        scienceGame.gameRunning = false;
        document.getElementById('sciencePlayerName').value = '';
        showScreen('scienceFightGame');
        switchMusic('background'); // Switch back to background music
    });
    
    document.getElementById('scienceHomeBtn').addEventListener('click', () => {
        document.getElementById('sciencePauseMenu').classList.add('hidden');
        scienceGame.gameRunning = false;
        document.getElementById('sciencePlayerName').value = '';
        showScreen('mainMenu');
        switchMusic('background'); // Switch back to background music
    });
    
    // Summary modal buttons
    document.getElementById('sciencePlayAgainBtn').addEventListener('click', () => {
        document.getElementById('scienceSummaryModal').classList.add('hidden');
        scienceGame.gameRunning = false;
        
        // Update student scores if in classroom mode
        if (gameState.isStudent) {
            updateStudentStatus(gameState.playerName, 'completed', {
                scienceFight: { 
                    diamonds: scienceGame.diamonds, 
                    correctAnswers: scienceGame.correctAnswers 
                }
            });
            
            // Show scoreboard for students
            showScoreboard();
            return;
        }
        
        document.getElementById('sciencePlayerName').value = '';
        showScreen('scienceFightGame');
        switchMusic('background'); // Switch back to background music
    });
    
    document.getElementById('scienceBackToMapBtn').addEventListener('click', () => {
        document.getElementById('scienceSummaryModal').classList.add('hidden');
        scienceGame.gameRunning = false;
        
        // Update student scores if in classroom mode
        if (gameState.isStudent) {
            updateStudentStatus(gameState.playerName, 'completed', {
                scienceFight: { 
                    diamonds: scienceGame.diamonds, 
                    correctAnswers: scienceGame.correctAnswers 
                }
            });
            
            // Show scoreboard for students
            showScoreboard();
            return;
        }
        
        document.getElementById('sciencePlayerName').value = '';
        showScreen('mapTour');
        switchMusic('background'); // Switch back to background music
    });
    
    // Close modals when clicking outside
    document.getElementById('sciencePauseMenu').addEventListener('click', (e) => {
        if (e.target.id === 'sciencePauseMenu') {
            scienceGame.isPaused = false;
            document.getElementById('sciencePauseMenu').classList.add('hidden');
        }
    });
    
    document.getElementById('scienceOptionModal').addEventListener('click', (e) => {
        if (e.target.id === 'scienceOptionModal') {
            cancelScienceAnswer();
        }
    });
}

// Classroom System Functions
function generateClassroomCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

function createClassroom() {
    try {
        // Clear any existing classroom data first
        localStorage.removeItem('classroomData');
        
        gameState.isTeacher = true;
        gameState.isStudent = false;
        
        // Generate unique classroom code
        const newCode = generateClassroomCode();
        
        // Reset and initialize classroom data
        classroomData = {
            code: newCode,
            students: [],
            testStarted: false,
            maxStudents: 40,
            createdAt: new Date().toISOString()
        };
        
        console.log('🏫 Creating classroom with data:', classroomData);
        
        // Store in localStorage for persistence
        localStorage.setItem('classroomData', JSON.stringify(classroomData));
        
        // Verify storage
        const storedData = localStorage.getItem('classroomData');
        console.log('🏫 Stored classroom data:', storedData);
        
        // Update UI
        document.getElementById('displayClassroomCode').textContent = classroomData.code;
        updateStudentList();
        
        // Set background for teacher dashboard
        const teacherDashboard = document.getElementById('teacherDashboard');
        const backgrounds = isMobile() ? mobileBgs : desktopBgs;
        const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        teacherDashboard.style.backgroundImage = `url('${randomBg}')`;
        teacherDashboard.style.backgroundSize = 'cover';
        teacherDashboard.style.backgroundPosition = 'center';
        
        showScreen('teacherDashboard');
        resumeBackgroundMusic();
        
        console.log('✅ Classroom created successfully with code:', classroomData.code);
        
        // Show success message
        setTimeout(() => {
            alert(`✅ สร้างห้องเรียนสำเร็จ!\n\nรหัสห้องเรียน: ${classroomData.code}\n\nให้นักเรียนใส่รหัสนี้เพื่อเข้าห้องเรียน`);
        }, 500);
        
    } catch (error) {
        console.error('❌ Error creating classroom:', error);
        alert('เกิดข้อผิดพลาดในการสร้างห้องเรียน กรุณาลองใหม่อีกครั้ง');
    }
}

function joinClassroom(code) {
    try {
        const codeInput = document.getElementById('classroomCode');
        const inputCode = code.trim().toUpperCase();
        
        console.log('🔍 Attempting to join classroom with code:', inputCode);
        
        // Reset input styling first
        codeInput.classList.remove('border-red-500', 'border-green-500');
        codeInput.classList.add('border-amber-300');
        hideCodeError();
        
        // Check if classroom exists in localStorage
        const storedClassroom = localStorage.getItem('classroomData');
        console.log('🔍 Stored classroom data:', storedClassroom);
        
        if (!storedClassroom) {
            console.log('❌ No classroom data found in localStorage');
            // Show error styling
            codeInput.classList.remove('border-amber-300');
            codeInput.classList.add('border-red-500');
            showCodeError('ไม่พบห้องเรียนที่มีรหัสนี้ กรุณาตรวจสอบรหัสอีกครั้ง');
            return;
        }
        
        const classroom = JSON.parse(storedClassroom);
        console.log('🔍 Classroom code from storage:', classroom.code);
        console.log('🔍 Input code:', inputCode);
        
        if (classroom.code !== inputCode) {
            console.log('❌ Code mismatch');
            // Show error styling
            codeInput.classList.remove('border-amber-300');
            codeInput.classList.add('border-red-500');
            showCodeError('รหัสห้องเรียนไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง');
            return;
        }
        
        if (classroom.students && classroom.students.length >= 40) {
            console.log('❌ Classroom full');
            // Show error styling
            codeInput.classList.remove('border-amber-300');
            codeInput.classList.add('border-red-500');
            showCodeError(`ห้องเรียนเต็มแล้ว (${classroom.students.length}/40 คน) ไม่สามารถเข้าร่วมได้`);
            return;
        }
        
        console.log('✅ Code validation successful');
        
        // Success - show green border
        codeInput.classList.remove('border-amber-300', 'border-red-500');
        codeInput.classList.add('border-green-500');
        hideCodeError();
        
        // Update global classroom data reference
        classroomData = classroom;
        
        // Set student state
        gameState.isStudent = true;
        gameState.isTeacher = false;
        gameState.classroomCode = inputCode;
        
        console.log('✅ Student state set, classroomCode:', gameState.classroomCode);
        
        // Set background for student selection screen
        const studentSelectionScreen = document.getElementById('studentSelectionScreen');
        const backgrounds = isMobile() ? mobileBgs : desktopBgs;
        const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        studentSelectionScreen.style.backgroundImage = `url('${randomBg}')`;
        studentSelectionScreen.style.backgroundSize = 'cover';
        studentSelectionScreen.style.backgroundPosition = 'center';
        
        showScreen('studentSelectionScreen');
        resumeBackgroundMusic();
        
        console.log('✅ Successfully joined classroom with code:', inputCode);
    } catch (error) {
        console.error('❌ Error joining classroom:', error);
        
        // Show error styling
        const codeInput = document.getElementById('classroomCode');
        codeInput.classList.remove('border-amber-300', 'border-green-500');
        codeInput.classList.add('border-red-500');
        
        showCodeError('เกิดข้อผิดพลาดในการเข้าห้องเรียน กรุณาลองใหม่อีกครั้ง');
    }
}

function showCodeError(message) {
    // Remove existing error message
    const existingError = document.getElementById('codeErrorMessage');
    if (existingError) {
        existingError.remove();
    }
    
    // Create new error message
    const errorDiv = document.createElement('div');
    errorDiv.id = 'codeErrorMessage';
    errorDiv.className = 'text-red-500 text-sm mt-2 text-center font-medium';
    errorDiv.textContent = message;
    
    // Insert after the input
    const codeInput = document.getElementById('classroomCode');
    codeInput.parentNode.insertBefore(errorDiv, codeInput.nextSibling);
}

function hideCodeError() {
    const existingError = document.getElementById('codeErrorMessage');
    if (existingError) {
        existingError.remove();
    }
}

function updateStudentList() {
    const studentListElement = document.getElementById('studentList');
    const studentCountElement = document.getElementById('studentCount');
    const startTestBtn = document.getElementById('startTestBtn');
    
    if (classroomData.students.length === 0) {
        studentListElement.innerHTML = '<p class="text-gray-500 text-center">ยังไม่มีนักเรียนเข้าห้องเรียน</p>';
        startTestBtn.disabled = true;
    } else {
        let studentListHTML = '';
        classroomData.students.forEach((student, index) => {
            const statusColor = getStudentStatusColor(student.status);
            const statusText = getStudentStatusText(student.status);
            
            studentListHTML += `
                <div class="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div>
                        <div class="font-medium text-gray-800">${student.name}</div>
                        <div class="text-sm text-gray-600">${student.class}</div>
                    </div>
                    <div class="text-right">
                        <div class="text-sm font-medium ${statusColor}">${statusText}</div>
                        <div class="text-xs text-gray-500">💎 ${student.totalDiamonds || 0}</div>
                    </div>
                </div>
            `;
        });
        studentListElement.innerHTML = studentListHTML;
        startTestBtn.disabled = false;
    }
    
    studentCountElement.textContent = classroomData.students.length;
    
    // Show end test button if all students completed
    const allCompleted = classroomData.students.length > 0 && 
        classroomData.students.every(s => s.status === 'completed');
    document.getElementById('endTestBtn').classList.toggle('hidden', !allCompleted);
}

function getStudentStatusColor(status) {
    switch (status) {
        case 'waiting': return 'text-yellow-600';
        case 'playing-thai': return 'text-green-600';
        case 'playing-math': return 'text-blue-600';
        case 'playing-science': return 'text-red-600';
        case 'completed': return 'text-purple-600';
        default: return 'text-gray-600';
    }
}

function getStudentStatusText(status) {
    switch (status) {
        case 'waiting': return 'รอเริ่มเกม';
        case 'playing-thai': return 'เล่น ThaiFruit';
        case 'playing-math': return 'เล่น MathRunner';
        case 'playing-science': return 'เล่น ScienceFight';
        case 'completed': return 'เสร็จสิ้น';
        default: return 'ไม่ทราบสถานะ';
    }
}

function addStudentToClassroom(className, studentName) {
    try {
        // Check if student already exists
        const existingStudent = classroomData.students.find(s => 
            s.name === studentName && s.class === className
        );
        
        if (existingStudent) {
            alert('นักเรียนคนนี้เข้าห้องเรียนแล้ว');
            return false;
        }
        
        if (classroomData.students.length >= classroomData.maxStudents) {
            alert('ห้องเรียนเต็มแล้ว (40/40 คน)');
            return false;
        }
        
        const newStudent = {
            id: Date.now() + Math.random(),
            name: studentName,
            class: className,
            status: 'waiting',
            scores: {
                thaiFruit: { diamonds: 0, correctAnswers: 0 },
                mathRunner: { diamonds: 0, correctAnswers: 0 },
                scienceFight: { diamonds: 0, correctAnswers: 0 }
            },
            totalDiamonds: 0,
            totalCorrectAnswers: 0,
            joinTime: new Date().toISOString()
        };
        
        classroomData.students.push(newStudent);
        
        // Update localStorage
        localStorage.setItem('classroomData', JSON.stringify(classroomData));
        
        // Update UI if teacher
        if (gameState.isTeacher) {
            updateStudentList();
        }
        
        console.log('✅ Student added:', studentName, 'from', className);
        return true;
    } catch (error) {
        console.error('❌ Error adding student:', error);
        alert('เกิดข้อผิดพลาดในการเข้าห้องเรียน');
        return false;
    }
}

function updateStudentStatus(studentName, status, scores = null) {
    try {
        const student = classroomData.students.find(s => s.name === studentName);
        if (student) {
            student.status = status;
            
            if (scores) {
                student.scores = { ...student.scores, ...scores };
                
                // Calculate totals
                student.totalDiamonds = 
                    student.scores.thaiFruit.diamonds +
                    student.scores.mathRunner.diamonds +
                    student.scores.scienceFight.diamonds;
                    
                student.totalCorrectAnswers = 
                    student.scores.thaiFruit.correctAnswers +
                    student.scores.mathRunner.correctAnswers +
                    student.scores.scienceFight.correctAnswers;
            }
            
            // Update localStorage
            localStorage.setItem('classroomData', JSON.stringify(classroomData));
            
            // Update UI if teacher
            if (gameState.isTeacher) {
                updateStudentList();
            }
            
            console.log('✅ Student status updated:', studentName, status);
        }
    } catch (error) {
        console.error('❌ Error updating student status:', error);
    }
}

function generateScoreboard(mapFilter = 'overall') {
    try {
        let students = [...classroomData.students];
        
        if (mapFilter === 'overall') {
            // Sort by total diamonds, then by total correct answers
            students.sort((a, b) => {
                if (b.totalDiamonds !== a.totalDiamonds) {
                    return b.totalDiamonds - a.totalDiamonds;
                }
                return b.totalCorrectAnswers - a.totalCorrectAnswers;
            });
        } else {
            // Sort by specific map scores
            students.sort((a, b) => {
                const aScore = a.scores[mapFilter];
                const bScore = b.scores[mapFilter];
                
                if (bScore.diamonds !== aScore.diamonds) {
                    return bScore.diamonds - aScore.diamonds;
                }
                return bScore.correctAnswers - aScore.correctAnswers;
            });
        }
        
        let html = `
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="px-2 py-2 text-left">อันดับ</th>
                            <th class="px-2 py-2 text-left">ชื่อ-สกุล</th>
                            <th class="px-2 py-2 text-left">ห้อง</th>
                            <th class="px-2 py-2 text-center">💎</th>
                            <th class="px-2 py-2 text-center">✅</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        students.forEach((student, index) => {
            let diamonds, correctAnswers;
            
            if (mapFilter === 'overall') {
                diamonds = student.totalDiamonds || 0;
                correctAnswers = student.totalCorrectAnswers || 0;
            } else {
                diamonds = student.scores[mapFilter]?.diamonds || 0;
                correctAnswers = student.scores[mapFilter]?.correctAnswers || 0;
            }
            
            const rankClass = index < 3 ? 'bg-yellow-100' : '';
            const rankIcon = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
            
            html += `
                <tr class="${rankClass}">
                    <td class="px-2 py-2 font-bold">${rankIcon} ${index + 1}</td>
                    <td class="px-2 py-2">${student.name}</td>
                    <td class="px-2 py-2">${student.class}</td>
                    <td class="px-2 py-2 text-center font-bold text-purple-600">${diamonds}</td>
                    <td class="px-2 py-2 text-center font-bold text-green-600">${correctAnswers}</td>
                </tr>
            `;
        });
        
        html += `
                    </tbody>
                </table>
            </div>
        `;
        
        return html;
    } catch (error) {
        console.error('❌ Error generating scoreboard:', error);
        return '<p class="text-red-500 text-center">เกิดข้อผิดพลาดในการแสดงผล Scoreboard</p>';
    }
}

// Event Listeners for Classroom System
function initClassroomEventListeners() {
    // Teacher Dashboard
    document.getElementById('backToMainFromTeacher').addEventListener('click', () => {
        gameState.isTeacher = false;
        classroomData = { code: '', students: [], testStarted: false, maxStudents: 40 };
        localStorage.removeItem('classroomData');
        showScreen('mainMenu');
    });
    
    document.getElementById('startTestBtn').addEventListener('click', () => {
        classroomData.testStarted = true;
        localStorage.setItem('classroomData', JSON.stringify(classroomData));
        alert('🚀 เริ่มบททดสอบแล้ว! นักเรียนสามารถเริ่มเล่นได้');
        
        // Update all students to enable their start buttons
        classroomData.students.forEach(student => {
            if (student.status === 'waiting') {
                student.status = 'ready';
            }
        });
        updateStudentList();
    });
    
    document.getElementById('viewScoreboardBtn').addEventListener('click', () => {
        showScoreboard();
    });
    
    document.getElementById('endTestBtn').addEventListener('click', () => {
        if (confirm('คุณต้องการจบบททดสอบและปิดห้องเรียนหรือไม่?')) {
            gameState.isTeacher = false;
            classroomData = { code: '', students: [], testStarted: false, maxStudents: 40 };
            localStorage.removeItem('classroomData');
            alert('✅ จบบททดสอบและปิดห้องเรียนแล้ว');
            showScreen('mainMenu');
        }
    });
    
    // Student Selection
    document.getElementById('classSelect').addEventListener('change', (e) => {
        const selectedClass = e.target.value;
        const studentSelect = document.getElementById('studentSelect');
        
        if (selectedClass) {
            gameState.selectedClass = selectedClass;
            studentSelect.disabled = false;
            studentSelect.innerHTML = '<option value="">-- เลือกชื่อ-สกุล --</option>';
            
            studentLists[selectedClass].forEach(studentName => {
                const option = document.createElement('option');
                option.value = studentName;
                option.textContent = studentName;
                studentSelect.appendChild(option);
            });
        } else {
            studentSelect.disabled = true;
            studentSelect.innerHTML = '<option value="">-- เลือกห้องเรียนก่อน --</option>';
            gameState.selectedClass = '';
            gameState.selectedStudent = '';
        }
        
        updateJoinButton();
    });
    
    document.getElementById('studentSelect').addEventListener('change', (e) => {
        gameState.selectedStudent = e.target.value;
        updateJoinButton();
    });
    
    document.getElementById('joinClassroomBtn').addEventListener('click', () => {
        if (gameState.selectedClass && gameState.selectedStudent) {
            const success = addStudentToClassroom(gameState.selectedClass, gameState.selectedStudent);
            if (success) {
                gameState.playerName = gameState.selectedStudent;
                updateStudentStatus(gameState.selectedStudent, 'waiting');
                
                // Show waiting status
                document.getElementById('studentStatus').classList.remove('hidden');
                document.getElementById('studentStatus').className = 'mb-6 p-4 rounded-xl border-2 bg-yellow-50 border-yellow-200';
                document.getElementById('statusText').textContent = 'รอครูเริ่มบททดสอบ...';
                
                // Start checking for test start
                checkTestStatus();
            }
        }
    });
    
    document.getElementById('backToMainFromStudent').addEventListener('click', () => {
        gameState.isStudent = false;
        gameState.classroomCode = '';
        gameState.selectedClass = '';
        gameState.selectedStudent = '';
        showScreen('mainMenu');
    });
    
    // Scoreboard
    document.getElementById('backFromScoreboard').addEventListener('click', () => {
        if (gameState.isTeacher) {
            showScreen('teacherDashboard');
        } else {
            showScreen('mainMenu');
        }
    });
    
    // Scoreboard filter buttons
    document.querySelectorAll('.scoreboard-filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active button
            document.querySelectorAll('.scoreboard-filter-btn').forEach(b => {
                b.classList.remove('active', 'opacity-100');
                b.classList.add('opacity-70');
            });
            e.target.classList.add('active', 'opacity-100');
            e.target.classList.remove('opacity-70');
            
            // Update scoreboard content
            const mapFilter = e.target.dataset.map;
            document.getElementById('scoreboardContent').innerHTML = generateScoreboard(mapFilter);
        });
    });
}

function updateJoinButton() {
    const joinBtn = document.getElementById('joinClassroomBtn');
    
    if (gameState.selectedClass && gameState.selectedStudent) {
        joinBtn.disabled = false;
        joinBtn.textContent = '🚀 เข้าห้องเรียน';
        joinBtn.classList.remove('disabled:opacity-50', 'disabled:cursor-not-allowed');
    } else {
        joinBtn.disabled = true;
        joinBtn.textContent = '⏳ รอครูเริ่มบททดสอบ';
        joinBtn.classList.add('disabled:opacity-50', 'disabled:cursor-not-allowed');
    }
}

function checkTestStatus() {
    const checkInterval = setInterval(() => {
        try {
            const storedClassroom = localStorage.getItem('classroomData');
            if (storedClassroom) {
                const classroom = JSON.parse(storedClassroom);
                
                if (classroom.testStarted) {
                    clearInterval(checkInterval);
                    
                    // Update status
                    document.getElementById('statusText').textContent = 'เริ่มบททดสอบแล้ว! กำลังไปยังแมพแรก...';
                    
                    setTimeout(() => {
                        // Go to first map
                        updateStudentStatus(gameState.selectedStudent, 'playing-thai');
                        showScreen('mapTour');
                        updateMapStates();
                        resumeBackgroundMusic();
                    }, 2000);
                }
            }
        } catch (error) {
            console.error('❌ Error checking test status:', error);
            clearInterval(checkInterval);
        }
    }, 2000); // Check every 2 seconds
}

function showScoreboard() {
    // Set background for scoreboard screen
    const scoreboardScreen = document.getElementById('scoreboardScreen');
    const backgrounds = isMobile() ? mobileBgs : desktopBgs;
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    scoreboardScreen.style.backgroundImage = `url('${randomBg}')`;
    scoreboardScreen.style.backgroundSize = 'cover';
    scoreboardScreen.style.backgroundPosition = 'center';
    
    // Generate initial scoreboard (overall)
    document.getElementById('scoreboardContent').innerHTML = generateScoreboard('overall');
    
    // Reset filter buttons
    document.querySelectorAll('.scoreboard-filter-btn').forEach(btn => {
        btn.classList.remove('active', 'opacity-100');
        btn.classList.add('opacity-70');
    });
    document.querySelector('[data-map="overall"]').classList.add('active', 'opacity-100');
    document.querySelector('[data-map="overall"]').classList.remove('opacity-70');
    
    showScreen('scoreboardScreen');
}

// Start the game
initGame();
initClassroomEventListeners();

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9726b0de83047dc6',t:'MTc1NTc0MzI0Mi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();