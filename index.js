document.addEventListener("alpine:init", () => {
  Alpine.store("items", {
    list: [
      {
        title: "Lorem ipsum dolor sit amet",
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ipsum turpis. Nam pulvinar, sapien vitae maximus varius, velit magna dictum urna, eu malesuada dolor ante nec erat. Mauris vitae quam eu turpis iaculis cursus in ac ex. Curabitur fringilla elementum nibh sed aliquet. Quisque vel arcu fermentum, dapibus arcu et, fringilla arcu. In at aliquam urna. Donec laoreet elit non nibh ullamcorper hendrerit. Vestibulum nunc ante, accumsan sed tortor sit amet, pretium venenatis mi. Fusce mollis pretium scelerisque. Donec fringilla rhoncus dolor vitae ultricies. Sed sed rutrum risus.</p>",
        expanded: false,
      },
      {
        title: "Nam vel consectetur adipiscing elit",
        body: "<p>Aenean et finibus mauris. Integer sagittis massa turpis. Quisque sit amet dictum augue, euismod consectetur felis. Donec aliquet imperdiet mi, euismod condimentum dolor dignissim ac. Etiam aliquet nisi eget nibh laoreet, vel convallis odio aliquam. Curabitur porttitor eget dolor at consequat. Vestibulum malesuada interdum enim eu iaculis.</p>",
        expanded: false,
      },
      {
        title: "Aliquam accumsan ligula elit",
        body: "<p>Quisque sapien risus, ultrices feugiat gravida vitae, iaculis nec justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam mollis nulla odio, eu bibendum lectus rutrum at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt orci eget consequat facilisis. Duis venenatis ipsum sit amet ex porta, non laoreet velit blandit. In tempor augue ut turpis lobortis sagittis. Etiam est lacus, rhoncus ac ultrices vitae, vehicula vel leo. Nam sed nisl tincidunt, volutpat odio sed, gravida nunc. Nam blandit purus eu erat molestie fringilla. Aenean id pulvinar dui, dapibus pretium enim. Praesent hendrerit consequat quam et accumsan. Morbi sed pretium tellus. Suspendisse mattis odio eget turpis viverra, at congue ligula mattis.</p>",
        expanded: false,
      },
    ],
    handleClick(idx) {
      this.list[idx].expanded = !this.list[idx].expanded;
    },
  });
});
