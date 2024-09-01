# NoteOn

* welcome to note On
* Your beautiful looking notes.

I want to make this app just aesthetically beautiful and get a nice feel on ios, android and windows and web. So i want to take my time and do this

Project init date : 31st August 202
Motivation: Evernote Shut Down its free tier

## release plan
* have a mobile version 
* have a web version
* have a windows desktop version


# hurdles
* need a apple dev account ($100 yearly)
* need a android dev account ($25 once)
* dont have a mac at the moment 
   * unable to build an ios, but i found out that eas expo does the build for you
   * not sure about mac desktop app, if that will come out it in the future
* A Financial provider that can accept both international and Indian payments
   * lemon squeezy , paddle (i think ill go with this)
   * https://www.reddit.com/r/SaaS/comments/13noyxv/paddle_vs_lemon_squeezy_experiences/

# Executive techincal designs

* socket with user alive and subscription
* maintain local with operations done so that can be synced with a single tramsaction
* possible extend into crdts with this framework
* a routine any file mis match check
* hyper links
* notebook 3 way linkage
* account sync manager maybe 2 devices in free plan with 300 notes
* exporter with markdown and pdf


# Epics expanded

- [ ] 1. Mobile App Development
    - [ ] Form a Basic UI Idea 
    - [ ] New Note Page Basics
        - [ ] Title Input
        - [ ] SubText Input
        - [ ] Save Button
        - [ ] Back Button
        - [ ] Bullet Points
        - [ ] Bold, Italic, Underline, Strikethrough
        - [ ] Text Color
        - [ ] Background Color
        - [ ] Text Alignment
        - [ ] Text Font Size
        - [ ] Text Font Weight
        - [ ] Text Font Style
        - [ ] Text Font Color
        - [ ] Text Font Background Color
    - [ ] Home Page Basics
    - [ ] NoteBook Page Basics
    - [ ] Font Pair Page Basics
    - [ ] Login Page 
   - [ ] Implement note creation, editing, and deletion
   - [ ] Implement offline mode and sync functionality

- [ ] 2. Backend Infrastructure
   - [ ] Set up cloud-based server architecture
   - [ ] Design and implement RESTful API for note operations
   - [ ] Develop user authentication and authorization system
   - [ ] Create data storage and retrieval system
   - [ ] Implement data synchronization mechanism
   - [ ] Structure the data in a way that is easy to query and update

- [ ] 3. Cross-Platform Sync
   - [ ] Develop real-time synchronization between mobile and web versions
   - [ ] Implement conflict resolution for simultaneous edits
   - [ ] Ensure data consistency across all platforms

- [ ] 4. Search and Organization
   - [ ] Implement full-text search functionality
   - [ ] Develop tagging and categorization system
   - [ ] Create smart folders and filtering options

Eventually want to asd crdt and teams feature and live sharing
maybe add a publish button that will make it a page public
ocr on images to search is another thing
tags

