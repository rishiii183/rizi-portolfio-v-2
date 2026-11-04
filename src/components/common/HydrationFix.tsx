export function HydrationFix() {
  return (
    <script
      id="extension-hydration-fix"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function clean(node) {
              if (!node || node.nodeType !== 1 || !node.attributes) return;
              for (var i = node.attributes.length - 1; i >= 0; i--) {
                var name = node.attributes[i].name;
                if (name && (name.indexOf('bis_') === 0 || name.indexOf('__processed_') === 0)) {
                  node.removeAttribute(name);
                }
              }
            }
            try {
              document.querySelectorAll('*').forEach(clean);
              var observer = new MutationObserver(function(mutations) {
                for (var i = 0; i < mutations.length; i++) {
                  var m = mutations[i];
                  if (m.type === 'attributes') {
                    var attr = m.attributeName;
                    if (attr && (attr.indexOf('bis_') === 0 || attr.indexOf('__processed_') === 0)) {
                      m.target.removeAttribute(attr);
                    }
                  } else if (m.addedNodes) {
                    for (var j = 0; j < m.addedNodes.length; j++) {
                      var n = m.addedNodes[j];
                      if (n.nodeType === 1) {
                        clean(n);
                        if (n.querySelectorAll) n.querySelectorAll('*').forEach(clean);
                      }
                    }
                  }
                }
              });
              observer.observe(document.documentElement, {
                attributes: true,
                childList: true,
                subtree: true,
              });
            } catch (e) {}
          })();
        `,
      }}
    />
  );
}

