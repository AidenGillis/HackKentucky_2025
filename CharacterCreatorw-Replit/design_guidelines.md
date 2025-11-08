# Character Creator UI - Design Guidelines

## Design Approach

**Aesthetic Direction**: Terminal/Cyberpunk Interface
- Black background with neon green accents creates a retro-futuristic, terminal-inspired aesthetic
- High contrast design for excellent readability
- Clean, technical appearance suitable for a creative tool

## Layout System

**Split-Screen Structure**:
- Left Panel (Character List): 35% width on desktop, full-width on mobile (stacks above)
- Right Panel (Creator Form): 65% width on desktop, full-width on mobile
- Use fixed positioning for panels to prevent shifting during interactions
- Vertical divider between panels with subtle green glow effect

**Spacing System**:
- Use Tailwind units: 4, 6, 8 for consistent rhythm
- Form spacing: gap-6 between form fields
- List item padding: p-4
- Panel padding: p-8 on desktop, p-4 on mobile
- Section margins: mb-8 for major sections

## Typography

**Font Stack**:
- Primary: 'JetBrains Mono' or 'Fira Code' (monospace fonts via Google Fonts) for terminal aesthetic
- Fallback: system monospace

**Hierarchy**:
- Page Title: text-2xl font-bold tracking-wide
- Section Headers: text-xl font-semibold
- Form Labels: text-sm font-medium uppercase tracking-wider
- Character Names in List: text-lg font-bold
- Body Text/Descriptions: text-sm leading-relaxed
- All text in green (#00ff00 or similar neon green)

## Component Library

### Character List (Left Panel)

**Container**:
- Sticky header with "Characters" title
- Scrollable content area (overflow-y-auto) with custom green scrollbar
- Empty state message when no characters exist

**Character Card**:
- Border with green outline (2px solid)
- Profile picture: 60px × 60px circular thumbnail, top-left position
- Character name: Bold, positioned right of image
- Description: Truncated to 2 lines with ellipsis, full text on hover/click
- Spacing between cards: mb-4
- Hover state: Slightly brighter green border, subtle scale transform

### Creator Form (Right Panel)

**Form Layout**:
- Vertical stack with consistent gap-6 spacing
- Clear section grouping with subtle dividers

**Input Fields**:
- Character Name: Single-line text input, green border (2px), transparent background
- Description: Textarea (4-5 rows), same styling as text input
- All inputs: Green placeholder text, green text on focus
- Focus state: Brighter green border, subtle glow effect

**Profile Picture Upload**:
- Large dropzone area (200px × 200px) with dashed green border
- Icon or placeholder text centered
- Preview thumbnail displayed after selection (same size as dropzone)
- "Choose File" or "Upload" text label below dropzone
- Accepted formats note in small text

**Action Buttons**:
- Primary "Create Character" button: Filled green background, black text, full-width or prominent size
- Secondary "Clear Form" button (if included): Outlined green, transparent background
- Button spacing: mt-8 after form fields
- Hover: Brightness increase, no blur effects needed

### Global Elements

**Header** (if included):
- Spans full width above split panels
- App title centered or left-aligned
- Height: h-16
- Border-bottom with green accent

**Scrollbars**:
- Custom styled with green track/thumb
- Thin width (4-6px) for modern appearance

## Responsive Behavior

**Desktop (lg+)**:
- Side-by-side split layout
- Both panels visible simultaneously
- Min-height: 100vh for full viewport usage

**Tablet/Mobile (< lg)**:
- Stack vertically: Creator form on top, character list below
- Creator form: Sticky position optional for better UX
- Full-width panels
- Reduced padding: p-4 instead of p-8

## Interaction Patterns

**Character Creation Flow**:
1. User fills form fields
2. "Create Character" button enabled only when name is provided
3. On submit: Character added to top of list
4. Form clears automatically
5. Brief success indication (green flash or checkmark animation)

**List Interactions**:
- Click character card to view full details (if editing is future feature)
- Scroll behavior: Smooth scrolling for long lists
- Latest character appears at top (reverse chronological)

**Validation**:
- Required field indicators (asterisk) on name field
- Inline validation messages in green text below inputs
- Disabled state for submit button when form incomplete

## Visual Enhancements

**Glow Effects**:
- Subtle green glow on focused inputs (box-shadow)
- Divider between panels with soft green glow
- Active/hover states amplify glow slightly

**Animations**:
- Smooth transitions (200-300ms) for hover states
- Fade-in animation when new character appears in list
- Form field focus transitions
- Keep animations minimal and purposeful

**Terminal Aesthetic Details**:
- Scanline overlay (very subtle) across entire interface
- Slight letter-spacing on monospace text
- Sharp, geometric borders (no rounded corners)
- High contrast between background and green elements

## Accessibility

- Ensure green (#00ff00) provides sufficient contrast against black background (WCAG AA)
- All form inputs have associated labels
- Keyboard navigation fully supported
- Focus indicators clearly visible with green outline
- Alt text for profile pictures
- Screen reader announcements for character additions

This design creates a distinctive, cohesive character creator with strong visual identity while maintaining excellent usability.