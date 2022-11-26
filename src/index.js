"use strict";

import layout from "./modules/layout";
import sidebarEvents from "./modules/events/sidebarEvents";
import mainContentEvents from "./modules/events/mainContentEvents";

import './style.css';

layout.loadPageLayOut();
sidebarEvents.loadEvents();
mainContentEvents.loadEvents();

