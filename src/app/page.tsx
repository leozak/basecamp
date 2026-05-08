import Banner from "@/components/banner/Banner";
import SearchField from "@/components/searchField/SearchField";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="mx-auto p-2 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
        <SearchField />
        BASECAMP
      </div>
    </>
  );
}
