# Student Companion

This application was developed for the 2020-2021 Technology Student Association conference. The application was ranked 1st in the state of North Carolina and was a semi-finalist at the National Conference. 

Preview the live application here: https://snack.expo.dev/@pkallem/softwaredev

1) Download the Expo Go application on your mobile device and scan the QR code to run it.
2) Use the web emulator to run the app (Disclaimer: UI may not look as intended)

# Introduction

What if there was a free software accessible to all students to potentially save their lives?
Without a doubt, schools have been greatly affected by this pandemic. Regardless of all the
safety measures taken with social distancing and sanitization, cases are still emerging in schools
across the nation and throughout many regions of the world. Making use of the latest
technologies available in application development, we were able to develop a companion for
every student’s pocket. It is essentially an application that offers an alternative and safer way to
many common actions that take place on the campus. We aimed to make lives simpler by
merging commonly used application functions into one package. Our end goal is to make
in-person school a safer experience and a smoother transition for students like us.

# Web Browser

The application offers a selection of frequently accessed websites. There is a horizontal scroll for
each application that is identified with an image and a name tag enclosed in a card view. The
basic sections offered are: Google, Interactive Simulators, Learning, and Assignments. Upon
clicking, a web browser opens up within the application while providing all the capabilities of a
regular browser such as Safari or Chrome. The application can be updated with new websites
upon public request.

# Scanner

The image recognition software in the application has support for QR Codes, Barcodes encoded
with Code 39, and Barcodes encoded with Code128. Based on the request, the application can
handle the information in different ways. If a URL is scanned, they are recognized and open in a
pop-up web browser. An applicable use for this feature would be to fill out attendance forms in a
classroom setting. Any messages/texts that are communicated get displayed through the alert
windows.

One of the prime features of the application allows for a touchless shopping experience. For
instance, barcodes on food items can be scanned and they will automatically get added to cart.
Invalid items are appropriately displayed, which are determined through a check of the
pre-existing database of valid items. At the end of the checkout process, the student can click on
share cart to auto generate a scannable QR code for the cashier or similar cafeteria representative
to scan (Perhaps using the same application) and receive all items in the cart along with their
respective price tags. In addition to this, the student can also add special requests and attach them
as a message to go with the QR code, such as “I am running low on funds, I will deposit money
tomorrow”, or “My lunch number is 123456789”. At any point in the whole process, the student
may choose to clear the cart of any information.

# To-Do List

It is extremely common to forget tasks on a busy day. The user is provided with a way to store
tasks and set a date/time for each task. The tasks can also be deleted after completion. Providing
a substitute for planners also helps to save the countless papers wasted for information that could
be digitized. The tasks are stored locally on the device, without the need for an external database.

# Toolbox

It is extremely common for schools to ask students for their identification cards for security
purposes, so the student will be able to store a digital copy of their ID on the app. Instructions are
provided to make sure that the card does not accidentally get cropped and lose information. This
feature is not just limited to ID cards, as it can also be used for vaccination cards as proof of
having the COVID-19 vaccine. Having a digital copy that is readily accessible would help make
it a seamless experience for both the students as well as the teachers. Students are also provided a
chance to upload documents such as study guides, equation sheets, or forms. There is a share
button provided next to the document, which pulls up the share menu.

# Personal Page

The personal page is a central hub for the user providing them with tools to assist on a
day-to-day basis regarding personal issues. At the top of the page, the weather function requests
the GPS location, with which the precise temperature is displayed in Farenheit with a graphic to
illustrate the weather. Next, a Pomodoro timer is included with the ability to change the amount
of working time and break time. This can be used for studying or doing homework, as well as for
standardized tests. A Pomodoro timer is very similar to a standardized test timer such as those
found in the SAT or ACT, by allocating work time and then a breaktime following it. This can be
manipulated as per the student’s needs, such as extending or reducing the amount of
work/breaktime. A pedometer helps to keep track of the number of steps that the student has
walked in the past 24 hours as well as recent steps using the gyroscopic data from the movement
of the mobile device/fitness band. The information is linked to the default step counter present in
most mobile devices, which means that as the phone syncs steps with a fitness band or similar
device, the app also updates the information. To encourage students to get up and move more,
they can click on the share button next to the step counter and open up their sharing menu.
Through here, they can either send a text message or communicate via bluetooth sharing with a
challenge statement. The default template of the statement is: “I have walked [BLANK] steps in
the past 24 hours. Are you up for a challenge?”. A menu of massage functions are available to
help the student utilize their handheld devices for their relaxation. After a lot of wrist overuse
through taking notes or other similar activities, discomfort is common. This is not just limited to
wrists, however, as headaches and other body aches can also benefit from this feature. To give
detailed instructions on massage locations, a menu of tips is present right under the massage
menu to ensure that the student will be able to correctly identify and fully utilize the potential of
the massager. At the bottom of the page, health & wellness tips are displayed to give users the
boost they may need on a stressful day.

# Application Permissions

The application requires access to the camera in order to use our image recognition software. The
user will be prompted to provide access to the camera for the first time. Access to photos is
required when uploading images into the application. This may be for uploading images of the
user’s identification/vaccination card or adding more equations. In order to load and display web
pages, access to an internet connection is needed. Motion & Fitness data is required to sync steps
for the pedometer function with your fitness band or similar device. The application does not
collect or store any data as this application has no lines of code written to transmit information
elsewhere. Everything done on the application is done through local storage. Unless the user
manually chooses to send information through the web browser, there is no other way to share
data. The application does not force the user to grant access to anything.

# Supported Platforms & Scalability

The application requires access to the camera in order to use our image recognition software. The
user will be prompted to provide access to the camera for the first time. Access to photos is
required when uploading images into the application. This may be for uploading images of the
user’s identification/vaccination card or adding more equations. In order to load and display web
pages, access to an internet connection is needed. Motion & Fitness data is required to sync steps
for the pedometer function with your fitness band or similar device. The application does not
collect or store any data as this application has no lines of code written to transmit information
elsewhere. Everything done on the application is done through local storage. Unless the user
manually chooses to send information through the web browser, there is no other way to share
data. The application does not force the user to grant access to anything.

# Development Process

The application was made using React Native, which is essentially a framework based on
Javascript and React to allow developers to create iOS and Android applications. In addition to
React Native, we used Expo, which is a toolchain that makes it simpler to use the functionalities
of React Native while also making testing and development more seamless. The application
interface is created using TypeScript, which is a superset of JavaScript. As a team, we used
Visual Studio Code to edit our code and shared a Git to work on the code as a team despite the
challenges faced with the pandemic. Node.js was a prerequisite that was installed on all devices
before using it as a development server. The servers were hosted locally over WiFi, but Expo
offered a tunnel which hosted the server on their domain, giving more flexibility for people to
test the app from different locations and access the same server.
