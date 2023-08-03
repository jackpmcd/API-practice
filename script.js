fetch("https://restcountries.com/v3.1/all?fields=name,population")
                .then(res => res.json())
                .then(data => {
                    const countries = document.getElementById("countries");

                    data.forEach(country => {
                        const countryName = country.name.common;
                        console.log(countryName);
                        const listItem = document.createElement("li");
                        const link = document.createElement("a");

                        link.textContent = countryName;
                        link.href = "#";

                        listItem.appendChild(link);
                        countries.appendChild(listItem);
                    })
            
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                }) 