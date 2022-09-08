# Git Your Gists a.k.a. How we use an existing API

## Thanks for the interesting requirements

## My Solution

### Used Technologies

I used `create-react-app --typescript` to create the initial files.

The technologies used were:

1. React
2. TypeScript
3. Redux
4. Vanilla CSS, but also style modules for respecting React standards
5. Router (It was optional, and it's usable just for extending the application)
6. Octokit for using the Gist API
7. Classical `fetch()` and `async` functions with `Promises` for loading the file content

### Project Structure

#### /public

`/public` contains the base index

`/public/media/svg` contains icons for programming language badges

#### /src

`/src` contains the code base, and also the next files:

`/config` contains two files, private.tx and public.ts. Inside `public.ts` there's a dictionary which maps programming
languages to their badge icon

`private.ts` is not uploaded on git, because it should contain a GitHub PAT used for authorising for the Gist API

`/components` contains general components, such as the footer and a loading spinner

`/media` contains static icons, but only a svg file in this case

`/pages` contains a folder named /home, which stores the components used for the **Home** page. These are the most
important ones.

`/reducers` contains the reducer used for storing the application's state. The only exception is the gist files
contents. The only exception is the data loaded from inside GistItem (the file contents are not loaded all at once).

`gists.d.ts` contains additional types used for the data extracted from the API.

## Which components solve which requirements

### 1. SearchBar

SearchBar is coded for loading a user's data. It is a simple form and button with calls to the right dispatch types.

So if you look for the solution of Requirement 1, you can look here and also inside the gistsReducer.

### 2. GistBrowser

GistBrowser has the purpose of listing the gists, or a message if you didn't find any or you didn't search yet.

So it doesn't solve a special requirements, but is good for modular code.

### 3. GistItem

Inside GistItem you can find the solution for the other three requirements: listing the file types, the forks and the
files.

I recommend searching `fotiDim` because he has only 5 gists, some of the have 2 forks and the last one has 2 files.

#### GistItem.tsx

The first two functions are used for loading the file contents for a gist

Inside the GistItem component, you can see how I solved all requirements step by step. The code is commented and says
which requirement is solved by which code fragments;



## Future improvements?

* A gist contains more than just files, the comments could also be loaded and diplayed.
* The use of multiple reducers is necessary for adding new uses, such as listing users, data about forks, and especially comments to be able to add your own comment
* Storing the data, because the API usage is limited even when you are authenticated
* Having the option of using no GitHub PAT, or adding one (but this would be risky without a backend, because it should be crypted. not recommended)
