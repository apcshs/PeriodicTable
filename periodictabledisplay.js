class PeriodicTableDisplay
{
    constructor(periodictable, tableid, infoboxbackgroundid, infoboxid)
    {
        this._periodictable = periodictable;
        this._tableid = tableid;
        this._periodictable.AddFilterChangedEventHandler(this._onFilterChanged.bind(this));
        this._infobox = new PeriodicTableInfoBox(periodictable, infoboxbackgroundid, infoboxid);

        this._categoryClassMappings = {
            "Alkali metal": "alkalimetal",
            "Alkaline earth metal": "alkalineearthmetal",
            "Lanthanide": "lanthanide",
            "Actinide": "actinide",
            "Transition metal": "transitionmetal",
            "Post-transition metal": "posttransitionmetal",
            "Metalloid": "metalloid",
            "Reactive nonmetal": "reactivenonmetal",
            "Noble gas": "noblegas",
            "Unknown": "unknown"
        };

        this._blockClassMappings = {
            "s": "sblock",
            "d": "dblock",
            "f": "fblock",
            "p": "pblock"
        };

        this._groupNames = {
            1: "Alkali metals",
            2: "Alkaline earth metals",
            15: "Pnictogens",
            16: "Chalcogens",
            17: "Halogens",
            18: "Noble gases"
        };

        this._createCells();
        this._createColumnHeadings();
        this._createRowHeadings();
        this._populate();

        document.getElementById(this._tableid).addEventListener('click', event => {
            let target = event.target;
            while (target && target !== document.getElementById(this._tableid)) {
                if (target.classList.contains("elementcell")) {
                    this._infobox.Show(target.dataset.atomicnumber);
                    return;
                }
                target = target.parentElement;
            }
        });
    }

    _onFilterChanged(changed)
    {
        for (let element of changed) {
            const cell = document.querySelector(`[data-row='${element.tablerow18col}'][data-column='${element.tablecolumn18col}']`);
            if (cell) cell.classList.toggle("elementcellfaded");
        }
    }

    _createCells()
    {
        const table = document.getElementById(this._tableid);
        for (let row = 0; row < this._periodictable.rowcount; row++) {
            const newrow = document.createElement('tr');
            table.appendChild(newrow);
            for (let column = 0; column < this._periodictable.columncount; column++) {
                const cell = document.createElement('td');
                cell.setAttribute("data-row", row);
                cell.setAttribute("data-column", column);
                cell.classList.add("cell");
                newrow.appendChild(cell);
            }
        }
    }

    _createColumnHeadings()
    {
        for (let column = 1; column <= 18; column++) {
            const cell = document.querySelector(`[data-row='0'][data-column='${column}']`);
            cell.innerHTML = `${column}<br /><span class="groupname">${this._groupNames[column] || ""}</span>`;
            cell.classList.add("headingcell");
        }
    }

    _createRowHeadings()
    {
        for (let row = 1; row <= 7; row++) {
            const cell = document.querySelector(`[data-row='${row}'][data-column='0']`);
            cell.innerHTML = row;
            cell.classList.add("headingcell");
        }
    }

    _populate()
    {
        for (let element of this._periodictable.data) {
            const cell = document.querySelector(`[data-row='${element.tablerow18col}'][data-column='${element.tablecolumn18col}']`);
            cell.setAttribute('data-atomicnumber', element.atomicnumber);

            cell.innerHTML = `
                <span class="el-number">${element.atomicnumber}</span>
                <span class="el-symbol">${element.symbol}</span>
                <span class="el-name">${element.name}</span>
                <span class="el-weight">${element.atomicweight}</span>`;

            const tooltip = [
                `Name: ${element.name}`,
                `Atomic number: ${element.atomicnumber}`,
                `Symbol: ${element.symbol}`,
                `Category: ${element.category}`,
                `Atomic weight: ${element.atomicweight}`,
                `State: ${element.stateofmatter}`,
                `Group: ${element.group}  Period: ${element.period}  Block: ${element.block}`
            ].join('\n');

            cell.setAttribute("title", tooltip);
            cell.classList.add("elementcell");
        }

        this.ColorByBlock();
    }

    ColorByCategory()
    {
        for (let element of this._periodictable.data) {
            const cell = document.querySelector(`[data-row='${element.tablerow18col}'][data-column='${element.tablecolumn18col}']`);
            Object.values(this._blockClassMappings).forEach(c => cell.classList.remove(c));
            cell.classList.add(this._categoryClassMappings[element.category]);
        }
    }

    ColorByBlock()
    {
        for (let element of this._periodictable.data) {
            const cell = document.querySelector(`[data-row='${element.tablerow18col}'][data-column='${element.tablecolumn18col}']`);
            Object.values(this._categoryClassMappings).forEach(c => cell.classList.remove(c));
            cell.classList.add(this._blockClassMappings[element.block]);
        }
    }
}
