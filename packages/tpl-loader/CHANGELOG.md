# 12.11.2021

-   fix bug of origin package:
    17: this.query = '?' + JSON.stringify(query);
    to
    17: query = '?' + JSON.stringify(query);

-   adding clean-publish
