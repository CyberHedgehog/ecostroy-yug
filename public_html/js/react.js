'use strict';

var Box = React.createClass({ displayName: "Box",
  getInitialState: function getInitialState() {
    return { windowWidth: window.innerWidth };
  },

  handleResize: function handleResize(e) {
    this.setState({ windowWidth: window.innerWidth });
  },

  componentDidMount: function componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },

  render: function render() {
    return React.createElement("div", null, "Current window width: ", this.state.windowWidth);
  }
});

ReactDOM.render(React.createElement(Box, null), mountNode);

var Greeting = React.createClass({ displayName: "Greeting",
  render: function render() {
    return React.createElement("p", null, "Hello, Universe");
  }
});

ReactDOM.render(React.createElement(Greeting, null), document.getElementById('greeting-div'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9ib3guanMiXSwibmFtZXMiOlsiQm94IiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFN0YXRlIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGFuZGxlUmVzaXplIiwiZSIsInNldFN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInN0YXRlIiwiUmVhY3RET00iLCJtb3VudE5vZGUiLCJHcmVldGluZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsTUFBTUMsTUFBTUMsV0FBTixDQUFrQixFQUFDQyxhQUFhLEtBQWQ7QUFDMUJDLG1CQUFnQiwyQkFBVztBQUN6QixXQUFPLEVBQUNDLGFBQWFDLE9BQU9DLFVBQXJCLEVBQVA7QUFDRCxHQUh5Qjs7QUFLMUJDLGdCQUFhLHNCQUFTQyxDQUFULEVBQVk7QUFDdkIsU0FBS0MsUUFBTCxDQUFjLEVBQUNMLGFBQWFDLE9BQU9DLFVBQXJCLEVBQWQ7QUFDRCxHQVB5Qjs7QUFTMUJJLHFCQUFrQiw2QkFBVztBQUMzQkwsV0FBT00sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS0osWUFBdkM7QUFDRCxHQVh5Qjs7QUFhMUJLLHdCQUFxQixnQ0FBVztBQUM5QlAsV0FBT1EsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBS04sWUFBMUM7QUFDRCxHQWZ5Qjs7QUFpQjFCTyxVQUFPLGtCQUFXO0FBQ2hCLFdBQU9kLE1BQU1lLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFBaUMsd0JBQWpDLEVBQTJELEtBQUtDLEtBQUwsQ0FBV1osV0FBdEUsQ0FBUDtBQUNEO0FBbkJ5QixDQUFsQixDQUFWOztBQXNCQWEsU0FBU0gsTUFBVCxDQUFnQmQsTUFBTWUsYUFBTixDQUFvQmhCLEdBQXBCLEVBQXlCLElBQXpCLENBQWhCLEVBQWdEbUIsU0FBaEQ7O0FBR0EsSUFBSUMsV0FBV25CLE1BQU1DLFdBQU4sQ0FBa0IsRUFBQ0MsYUFBYSxVQUFkO0FBQy9CWSxVQUFPLGtCQUFXO0FBQ2hCLFdBQ0VkLE1BQU1lLGFBQU4sQ0FBb0IsR0FBcEIsRUFBeUIsSUFBekIsRUFBK0IsaUJBQS9CLENBREY7QUFHRDtBQUw4QixDQUFsQixDQUFmOztBQVFBRSxTQUFTSCxNQUFULENBQWdCZCxNQUFNZSxhQUFOLENBQW9CSSxRQUFwQixFQUE4QixJQUE5QixDQUFoQixFQUFxREMsU0FBU0MsY0FBVCxDQUF3QixjQUF4QixDQUFyRCIsImZpbGUiOiJfYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEJveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJCb3hcIixcbiAgZ2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7d2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRofTtcbiAgfSxcblxuICBoYW5kbGVSZXNpemU6ZnVuY3Rpb24oZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3dpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6ZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgfSxcblxuICByZW5kZXI6ZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXCJDdXJyZW50IHdpbmRvdyB3aWR0aDogXCIsIHRoaXMuc3RhdGUud2luZG93V2lkdGgpO1xuICB9XG59KTtcblxuUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsKSwgbW91bnROb2RlKTtcblxuXG52YXIgR3JlZXRpbmcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiR3JlZXRpbmdcIixcbiAgcmVuZGVyOmZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkhlbGxvLCBVbml2ZXJzZVwiKVxuICAgIClcbiAgfVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEdyZWV0aW5nLCBudWxsKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWV0aW5nLWRpdicpKTtcbiJdfQ==

"use strict";

console.log("react");
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9kZW1vLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLEdBQVIsQ0FBWSxPQUFaIiwiZmlsZSI6Il9kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJyZWFjdFwiKTsiXX0=

"use strict";

var List = function List($__0) {
    var items = $__0.items;
    return React.createElement("ul", null, items.map(function (item) {
        return React.createElement("li", { key: item.id }, item.name);
    }));
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9leGFtcGxlcy5qcyJdLCJuYW1lcyI6WyJMaXN0IiwiJF9fMCIsIml0ZW1zIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiaXRlbSIsImtleSIsImlkIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxPQUFPLFNBQVBBLElBQU8sQ0FBU0MsSUFBVCxFQUFpQjtBQUFDLFFBQUlDLFFBQU1ELEtBQUtDLEtBQWY7QUFDekIsV0FDSUMsTUFBTUMsYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUNJRixNQUFNRyxHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUNOO0FBQUMsZUFBT0gsTUFBTUMsYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFDRyxLQUFLRCxLQUFLRSxFQUFYLEVBQTFCLEVBQTBDRixLQUFLRyxJQUEvQyxDQUFQO0FBQTZELEtBRGxFLENBREosQ0FESjtBQU9ILENBUkQiLCJmaWxlIjoiX2V4YW1wbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IExpc3QgPSBmdW5jdGlvbigkX18wICApIHt2YXIgaXRlbXM9JF9fMC5pdGVtcztcbiAgICByZXR1cm4gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgXG4gICAgICAgICAgICBpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSkgIFxuICAgICAgICAgICAgICAgIHtyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGl0ZW0uaWR9LCBpdGVtLm5hbWUpO31cbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICk7XG59OyJdfQ==
