#!/bin/bash

# Form Components
ng generate component components/ui/form/input
ng generate component components/ui/form/checkbox
ng generate component components/ui/form/radio
ng generate component components/ui/form/select
ng generate component components/ui/form/date-picker

# Navigation Components
ng generate component components/ui/navigation/navbar
ng generate component components/ui/navigation/sidebar
ng generate component components/ui/navigation/breadcrumb
ng generate component components/ui/navigation/pagination

# Feedback Components
ng generate component components/ui/feedback/alert
ng generate component components/ui/feedback/toast-notification
ng generate component components/ui/feedback/spinner-loader

# Data Display Components
ng generate component components/ui/data-display/card
ng generate component components/ui/data-display/table
ng generate component components/ui/data-display/tabs
ng generate component components/ui/data-display/accordion
ng generate component components/ui/data-display/badge

# Overlay Components
ng generate component components/ui/overlay/modal
ng generate component components/ui/overlay/tooltip
ng generate component components/ui/overlay/dropdown

# Miscellaneous Components
ng generate component components/ui/misc/slider
ng generate component components/ui/misc/progress-bar

# run this command to generate components
# chmod +x generate-components.sh
# ./generate-components.sh
