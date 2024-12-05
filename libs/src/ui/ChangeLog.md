## V1.2.10 (2024/12/5)

✨ New Feature

- Added a new \_stepper.scss file with stepper styling
- Added Stepper component in ui/index.ts
- Added stepper.stories.tsx in ui/module/stepper directory
- Created a new ui/module/stepper directory with index.ts
- Created stepper.tsx in ui/module/stepper

---

🆙 Update

- Imported the \_stepper.scss file in globals.scss
- Refactored tabs.tsx to use TabItem from tab-item instead of defining it in the file
- Add a new TabItem.tsx file with interface and component definition
- Import Button and styled functions in TabItem.tsx
- Define TabItemProps interface for tab properties
- Define TabItem component for single tab item with various properties
- Import ArrowDownIcon in Tabs.stories.tsx
- Add a prefix prop with options in TabItemProps interface
- Set a default value for prefix prop in TabItem component
- Import Button in the same line as Toast
- Change the title parameter value from 'Dialog' to 'Toast'
- Change the component parameter value from 'Dialog 的呈現及說明' to '通知訊息組件的呈現及說明'
- Rename the Default story from '預設項目' to 'Default'
- Rename the Type story from 'Toast 類型' to '通知訊息類型'
- Rename the Demo story from '點擊顯示' to '互動模式'
- Update the component description text in the Dialog stories
- Change the name of the Demo story to '互動模式'

---

🪲 Bug Fix
