# Dashboard Animation Guide

This document outlines all animations implemented in the Dashboard component using the Motion library.

## Animation Timeline

### Phase 1: Initial Load (0ms - 500ms)
**Title and Subtitle (FadeInUp)**
- **Duration:** 500ms
- **Elements:**
  - Title: "최고의 실력을 가진 외국인 인재를 찾고 계신가요?"
  - Subtitle: "법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요."
- **Animation:** Fade in with upward movement (y: 0-20px)
- **Timing:** 
  - Title: starts at 0ms, duration 500ms
  - Subtitle: starts at 100ms (delay 0.1s), duration 500ms

### Phase 2: Badge Animation (800ms)
**Badge (FadeIn)**
- **Duration:** 500ms
- **Element:** "풀타임, 파트타임" badge
- **Animation:** Simple fade in from opacity 0 to 1
- **Delay:** 300ms after subtitle (total 800ms from start)

### Phase 3: Link Animation (200ms)
**Call-to-Action Link**
- **Duration:** 500ms
- **Element:** "개발자가 필요하신가요?" link
- **Animation:** Fade in
- **Delay:** 200ms from title start

### Phase 4: Salary Section (300ms delay)
**Salary Information (FadeIn at once)**
- **Duration:** 500ms
- **Elements:** 3 salary cards
- **Animation:** All 3 fade in simultaneously with slight upward movement
- **Delay:** 300ms
- **Note:** All 3 items animate in parallel (not staggered)

### Phase 5: Carousel Elements (500ms)
**Talent Carousel Components**
- **Duration:** 500ms
- **Elements:**
  - Tooltips
  - Bottom card
  - Navigation arrows
- **Animation:** Fade in
- **Timing:** Synchronized with title animation

### Phase 6: Job Categories Section (400ms delay)
**Job Category Cards (FadeIn + Auto-Scroll)**
- **Duration:** 500ms fade-in
- **Elements:** 5 job category cards
- **Animation:** 
  - Initial fade in (opacity 0 to 1)
  - Auto-scroll left every 5 seconds
  - Smooth scroll transition: 500ms duration with easeInOut easing
- **Delay:** 400ms from title start
- **Scroll Behavior:**
  - Triggers every 5 seconds
  - Moves 332px each time (card width + gap)
  - Smooth animation: 500ms duration

## Component Structure

```
Dashboard
├── Badge (delay: 0.8s)
├── Title (delay: 0s)
├── Subtitle (delay: 0.1s)
├── Link (delay: 0.2s)
├── Salary Section (delay: 0.3s)
│   ├── Card 1
│   ├── Card 2
│   └── Card 3
├── Carousel (built-in animations)
│   ├── Tooltips (delay: 0s)
│   ├── Cards (delay: varies)
│   └── Arrows (delay: 0.25s)
└── Job Categories (delay: 0.4s + auto-scroll)
    ├── Card 1
    ├── Card 2
    ├── Card 3
    ├── Card 4
    └── Card 5
```

## Key Features

### 1. FadeInUp Animation
- Title and Subtitle use `opacity: 0, y: 20` → `opacity: 1, y: 0`
- Smooth upward movement creates elegant entrance

### 2. Staggered Delays
- Each section has its own delay to create sequential animation effect
- Badge appears last (0.8s) as per requirements

### 3. Auto-Scroll Job Categories
- Uses React `useState` and `useEffect` for auto-scroll logic
- `setInterval` triggers scroll every 5000ms (5 seconds)
- Motion component animates the position smoothly (500ms)
- Scroll position increments by 332px (min-w of card + gap)

### 4. Carousel Animations
- Title carousel elements fade in with the main title
- Tooltips and cards have their own staggered animations
- Navigation arrows fade in with 250ms delay

## Customization Tips

To adjust animations:
- **Change timing:** Edit `delay` and `duration` in transition props
- **Change scroll interval:** Modify `5000` in `setInterval` (in milliseconds)
- **Change scroll distance:** Update `332` value based on your card width
- **Change animation effect:** Modify `initial` and `animate` props

## Browser Compatibility

Motion library is compatible with all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
