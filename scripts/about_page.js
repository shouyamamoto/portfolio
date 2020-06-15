$(document).ready(function() {
    $('#pagepiling').pagepiling({
      anchors: ['page1', 'page2', 'page3','page4'],
      navigation: {
        'position': 'right',
        'tooltips': ['ME', 'SKILL', 'OTHER', 'HOBBY']
      },
      scrollingSpeed: 1000,
      sectionSelector: '.contents'
    });
});