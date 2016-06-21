/*
*   This file is part of the Perspectives Firefox Client
*
*   Copyright (C) 2011 Dan Wendlandt
*
*   This program is free software: you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation, version 3 of the License.
*
*   This program is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU General Public License for more details.
*
*   You should have received a copy of the GNU General Public License
*   along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// Interface for interacting with all browser-specific functionality
// required by Perspectives.
var Pers_browser = {
	root_prefs : null,

	getRootPrefs: function() {
		if (Pers_browser.root_prefs === null) {
			var prefstr = "@mozilla.org/preferences-service;1";
			if (prefstr in Components.classes) {
				Pers_browser.root_prefs = Components.classes[prefstr].
					getService(Components.interfaces.nsIPrefBranchInternal);
			}
			else {
				Pers_debug.d_print("error",
					"Could not define Pers_browser.root_prefs!");
			}
		}
		return Pers_browser.root_prefs
	},

	// return the value of a boolean preference
	getBoolPref: function(prefName) {
		return Pers_browser.getRootPrefs().getBoolPref(prefName);
	},

	// set the value of a boolean preference
	setBoolPref: function(prefName, newVal) {
		Pers_browser.getRootPrefs().setBoolPref(prefName, newVal);
		return;
	},

	// return the value of a string preference
	getCharPref: function(prefName) {
		return Pers_browser.getRootPrefs().getCharPref(prefName);
	},

	// set the value of a string preference
	setCharPref: function(prefName, newVal) {
		Pers_browser.getRootPrefs().setCharPref(prefName, newVal);
		return;
	},

	// return the value of an int preference
	getIntPref: function(prefName) {
		return Pers_browser.getRootPrefs().getIntPref(prefName);
	},

	// set the value of an int preference
	setIntPref: function(prefName, newVal) {
		Pers_browser.getRootPrefs().setIntPref(prefName, newVal);
		return;
	},
};

