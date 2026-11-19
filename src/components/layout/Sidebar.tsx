import { Bookmark, Inbox, Rss } from "lucide-react";
import { sampleFeeds } from "../../data/feeds";

export const Sidebar = () => {
  return (
    <aside className="w-full space-y-6 border-r border-gray-200 bg-white p-5 md:w-64 md:shrink-0">
      {/* Main Navigation */}
      <nav>
        <ul className="space-y-1">
          <li>
            <button className="flex w-full items-center gap-3 rounded-lg bg-orange-50 px-3 py-2.5 text-sm font-medium text-orange-600">
              <Inbox size={18} />
              All Items
            </button>
          </li>

          <li>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900">
              <Bookmark size={18} />
              Saved
            </button>
          </li>
        </ul>
      </nav>

      <hr className="border-gray-100" />

      <section>
        <h3 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Categories
        </h3>

        <ul className="space-y-4">
          {sampleFeeds.categories.map((category) => (
            <li key={category.name}>
              <div className="mb-1 flex items-center justify-between px-3">
                <span className="text-sm font-semibold text-gray-800">
                  {category.name}
                </span>

                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                  {category.feeds.length}
                </span>
              </div>

              <ul className="space-y-1">
                {category.feeds.map((feed) => (
                  <li key={feed.feedUrl}>
                    <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900">
                      <span className="">{feed.title[0]}</span>
                      <span className="truncate">{feed.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};
