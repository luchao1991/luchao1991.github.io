# luchao1991.github.io
personal page

## deployment

To create the `academic-kickstart` repository, [**fork**](https://github.com/sourcethemes/academic-kickstart#fork-destination-box) the *Academic Kickstart* repository and clone your fork with Git (download it to your computer) by replacing `` in the following command with your Github username:

```
git clone https://github.com/<USERNAME>/academic-kickstart.git My_Website
cd My_Website
git submodule update --init --recursive
```

In your `config.toml` file, set `baseurl = "https://.github.io/"`, where `` is your Github username. Stop Hugo if it’s running and delete the `public`directory if it exists (by typing `rm -r public/`).

Add your *.github.io* repository into a submodule in a folder named *public*, replacing with your Github username:

```
git submodule add -f -b master https://github.com/<USERNAME>/<USERNAME>.github.io.git public
```

Add everything to your local git repository and push it up to your remote repository on GitHub:

```
git add .
git commit -m "Initial commit"
git push -u origin master
```

Whilst running the above commands you may be prompted for your Github username and password.

Next, **regenerate** your website’s HTML code by running Hugo and uploading the *public* submodule to GitHub:

```
hugo
cd public
git add .
git commit -m "Build website"
git push origin master
cd ..
```

Once Git has finished uploading your site to Github, you can open your new `https://.github.io` website in your browser, substituting with your Github username.



## add publication

### Manually

Alternatively, publications can be manually created using the command:

```
hugo new --kind publication publication/<my-publication>
```

where <my-publication> is the name of your publication, using hyphens (-) instead of spaces.

Then edit the parameters in content/publication/<my-publication>/index.md to include the details of your publication. The main parameters include:

title: the title of your publication
date: the date that your publication was first published (must be in a valid TOML date format)
publication_types: use the following legend to specify the type of your publication, e.g. "1" for conference proceedings:
0 = Uncategorized
1 = Conference paper
2 = Journal article
3 = Preprint / Working Paper
4 = Report
5 = Book
6 = Book section
7 = Thesis (v4.2+ required)
8 = Patent (v4.2+ required)
publication: where your title was published - Markdown formatting is enabled here for italic etc.
abstract: the summary of your publication
Further details on your publication can be written in the body of the document (after the YAML/TOML front matter) using Markdown for formatting. This text will be displayed on the publication’s page.

To enable visitors to read your work, either paste a link to your PDF in url_pdf or **add a PDF file with the same name as your publication’s own folder to your publication’s folder and a PDF link will be automatically generated.** For example, if your publication is located at publication/photons/index.md, place a PDF at publication/photons/photons.pdf.

To enable visitors to easily cite your work, export a BibTeX citation file named cite.bib from your reference management tool to your publication’s own folder and a citation link will be automatically generated.

### Linking other resources

The url_ links can either point to local or web content. Associated local publication content, may be copied to the publication’s folder and referenced like url_code = "code.zip".