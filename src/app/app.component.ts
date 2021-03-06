import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { PageScrollConfig } from 'ngx-page-scroll';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { TextAnimation } from 'ngx-teximate';
import { fadeInDown } from 'ng-animate';
import { SwiperDirective } from 'ngx-swiper-wrapper';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './fontawesome/css/all.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  text = 'SDJFLJSDLJFLKSDJLFSKL';

  enterAnimation: TextAnimation = {
    animation: fadeInDown,
    delay: 50,
    type: 'letter'
  };
  public slides = [
    {
      'photo': 'url(\'../assets/images/Working1.jpg\')',
      'year': 'Apr 2017 - Present',
      'title': 'Quality Assurance Engineer \n-- MeteorSpark Inc.',
      'text': '• Performed manual/automation Quality Assurance on JustDo.today (Manual & Automated via Puppeteer + Chromium)\n• Examined compatibility on multiple platforms, including Android, IOS and PC'
    },
    {
      'photo': 'url(\'../assets/images/Working2.jpg\')',
      'year': 'Jun 2018 - Nov 2018',
      'title': 'IVVQ T&C Software Engineer Intern \n-- Thales HK',
      'text': '• Enhanced Test Automated Tool for conducting DDQS workflow testing on the main control system of Ground Transportation (Front-End: JavaFX, Back-End: Java, Hibernate & SQLite)\n• Develop Real - time Trend for monitoring station equipment\' data (Front-End: Angular 5 + Bootstrap; Back-End: STOMP WebSocket Interface, retrieving data from SCADASoft Connector)'
    },
    {
      'photo': 'url(\'../assets/images/Working3.jpg\')',
      'year': 'Jan 2018 - Feb 2018',
      'title': 'Wealth Management Intern \n-- AIA',
      'text': '• Participated in International Fund House seminars on private wealth management\n• Gained in-depth understanding of daily operations within a listed company, for future career development'
    },
    {
      'photo': 'url(\'../assets/images/Working4.jpg\')',
      'year': 'Jun 2017 - Aug 2017',
      'title': 'Construction Project Manager Intern \n-- CLP HK',
      'text': '• Performed R&D on Construction Permit Monitoring Dashboard project, delivered a fully-functional product after peer evaluation and testing.\n• Implemented automation utilities for data handling systems, including contractor monthly high-risk activities reporting system, KPI reporting system, etc.'
    },
    {
      'photo': 'url(\'../assets/images/Working5.jpg\')',
      'year': 'Jan 2017 - Apr 2017',
      'title': 'Junior Web Developer \n-- Sanuker Group Limited',
      'text': '• Full-stack web development using ReactJS, Redux, and Meteor.\n• Developed web-version database visualization utility for MongoDB.\n• Utilized Bootstrap and Material-UI for improving the appearance of the deliverable web solution product.'
    }
  ];

  public config: SwiperConfigInterface = {
    direction: 'vertical',
    slidesPerView: 'auto',
    observer: true,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: true,
    loop: false,
    speed: 1600,
  };

  @ViewChild('swiper-container') swiperView: SwiperDirective;


  mySlideImages = [1, 2, 3].map((i) => `https://picsum.photos/640/480?image=${i}`);
  myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
  mySlideOptions = { items: 1, dots: true, nav: false };
  myCarouselOptions = { items: 3, dots: true, nav: true };

  title = 'Bill\'s Resume';
  introHeader = 'I develop website, software, and studying Machine Learning.\n Yes, I love Technology.';
  introContent = 'Experienced Quality Assurance and Software Engineer \
  with a demonstrated history of working in the Information Technology Industry. Currently pursuing \
  a Dual Degree Program (BEng in Computer Science & BBA Business Management) from the Hong Kong University \
  of Science and Technology.';

  aboutMeHeader = 'I am Bill, HKUST Year 3 Computer Science Major Student';
  aboutMeContent = 'Had several working experiences in different fields of Software Enginnering: \
  Full-stack Web Development, Full-stack Java Software Development, Excel VBA Script Development, etc.';

  javaDevelopmentContent = [
    'Designed, Implemented and Refactored the SQLite Database required for the tool used to conduct DDQS Workflow testing on the Ground Transportation Main Control System.',
    'Completed Full-stack Java Implementation of Test Automated Tool for Thales using JavaFX and Hibernate'
  ];
  angularDevelopmentContent = [
    'Developed Web-solution for monitoring Thales Equipments\' data. Utilized Angular 5 + Bootstrap for Front-End Implementation, STOMP WebSocket Interface for establishing back-end connection with SCADASoft connector. ',
    'Implemented Personal Resume Website for Demonstration.'
  ];
  pythonDevelopmentContent = [
    'Proficient in using Pandas and SkLearn to conduct data analysis.',
    'Constructed GUI-based Application (Tkinter & SkLearn) for automatically performing Grid-Search (Model Parameter Tuning) on text-mining related task. ',
    'Able to perform data analysis task with R.'
  ];

  constructor() {
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) { return b; }
        if (t === d) { return b + c; }
        if ((t /= d / 2) < 1) { return c / 2 * Math.pow(2, 10 * (t - 1)) + b; }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };
  }

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: 'zoom'
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [];
    for (let index = 1; index < 38; index++) {
      this.galleryImages.push({
        small: '../assets/images/portfolio/img-' + index.toString() + '.jpg',
        medium: '../assets/images/portfolio/img-' + index.toString() + '.jpg',
        big: '../assets/images/portfolio/img-' + index.toString() + '.jpg'
      });
    }
  }

  ngAfterViewInit() {
    // this.swiperView.startAutoplay();
  }
}
