import { Component } from '@angular/core';

@Component({
    selector: 'app-bottom-nav',
    templateUrl: './bottom-nav.component.html',
})
export class BottomNavComponent {
    footerItems = [
        {
            item: 'Team Learning Center',
            children: [
                {
                    item: 'About',
                },
                {
                    item: 'What We Offer',
                },
                {
                    item: 'Course Catalog'
                },
            ]
        },

        {
            item: 'What\'s New',
            children: [
                {
                    item: 'New Courses',
                },
                {
                    item: 'Site Features',
                },
                {
                    item: '&nbsp;'
                },
            ]
        },

        {
            item: 'Community',
            children: [
                {
                    item: 'Developers',
                },
                {
                    item: 'Blogs',
                },
                {
                    item: 'Services'
                },
            ]
        },

        {
            item: 'Terms',
            children: [
                {
                    item: 'Privacy Policy',
                },
                {
                    item: 'Accessibility Statement',
                },
                {
                    item: 'Cookie Settings'
                },
            ]
        },

        {
            item: 'Help Center',
            children: [
                {
                    item: 'Contact Us',
                },
                {
                    item: 'Help Manual',
                },
                {
                    item: '&nbsp;'
                },
            ]
        },
    ];

    bottomItems = [
        'Team Learning Center &copy; 2022',
        ' About ',
        ' Accessibility ',
        ' Privacy Policy ',
        ' Cookie Settings ',
        ' Contact Us ',
    ];

}