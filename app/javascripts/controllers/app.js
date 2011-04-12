Teambox.Controllers.AppController = Backbone.Controller.extend({
  routes: {
    '!/'                : 'index',
    '!/today'           : 'today',
    '!/my_tasks'        : 'my_tasks',
    '!/all_tasks'       : 'all_tasks',
    '!/projects'        : 'projects',
    '!/search/:terms'   : 'search'
  },

  index: function() {
    this.highlightSidebar('activity_link');
    Teambox.activities_view.render();
  },

  today: function() {
    this.highlightSidebar('today_link');
    Teambox.today_view.render();
  },

  my_tasks: function() {
    this.highlightSidebar('my_tasks_link');
    Teambox.my_tasks_view.render();
  },

  all_tasks: function() {
    this.highlightSidebar('all_tasks_link');
    Teambox.all_tasks_view.render();
  },

  projects: function() {
    this.highlightSidebar('projects_link');
    Teambox.projects_view.render();
  },

  search: function(terms) {
    Teambox.search_view.getResults(terms);
  },

  highlightSidebar: function(id) {
    Teambox.sidebar_view.selectElement($(id), true);
  }
});
