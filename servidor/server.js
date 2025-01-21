import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

let skins = [
    {
        id: 1,
        images: "url_imagem_skin1",
        name: "Prime Vandal",
        weapon: "Vandal",
        price: "1775 VP",
        bundle: {
            image: "url_imagem_bundle_prime",
            name: "Prime Collection",
            price: "7100 VP"
        },
        variants: ["Orange", "Blue", "Yellow"],
        rarity: "Premium"
    },
    {
        id: 2,
        images: "url_imagem_skin2",
        name: "Reaver Vandal",
        weapon: "Vandal",
        price: "1775 VP",
        bundle: {
            image: "url_imagem_bundle_reaver",
            name: "Reaver Collection",
            price: "7100 VP"
        },
        variants: ["Purple", "White", "Black", "Red"],
        rarity: "Premium"
    },
    {
        id: 3,
        images: "url_imagem_skin3",
        name: "Glitchpop Frenzy",
        weapon: "Frenzy",
        price: "2175 VP",
        bundle: {
            image: "url_imagem_bundle_glitchpop",
            name: "Glitchpop Collection",
            price: "8700 VP"
        },
        variants: ["Pink", "Gold", "Blue", "Red"],
        rarity: "Exclusive"
    },
    {
        id: 4,
        images: "url_imagem_skin4",
        name: "Sovereign Guardian",
        weapon: "Guardian",
        price: "1775 VP",
        bundle: {
            image: "url_imagem_bundle_sovereign",
            name: "Sovereign Collection",
            price: "7100 VP"
        },
        variants: ["Golden", "Green", "Silver", "Purple"],
        rarity: "Premium"
    },
    {
        id: 5,
        images: "url_imagem_skin5",
        name: "Ion Phantom",
        weapon: "Phantom",
        price: "1775 VP",
        bundle: {
            image: "url_imagem_bundle_ion",
            name: "Ion Collection",
            price: "7100 VP"
        },
        variants: ["Original"],
        rarity: "Premium"
    },
    {
        id: 6,
        images: "url_imagem_skin6",
        name: "Valorant Go! Vol. 1 Knife",
        weapon: "Melee (Knife)",
        price: "3550 VP",
        bundle: {
            image: "url_imagem_bundle_go1",
            name: "Valorant Go! Vol. 1",
            price: "7100 VP"
        },
        variants: ["Original"],
        rarity: "Premium"
    },
    {
        id: 7,
        images: "url_imagem_skin7",
        name: "Glitchpop Judge",
        weapon: "Judge",
        price: "2175 VP",
        bundle: {
            image: "url_imagem_bundle_glitchpop",
            name: "Glitchpop Collection",
            price: "8700 VP"
        },
        variants: ["Pink", "Gold", "Blue", "Red"],
        rarity: "Exclusive"
    },
    {
        id: 8,
        images: "url_imagem_skin8",
        name: "Radiant Crisis 001 Phantom",
        weapon: "Phantom",
        price: "1775 VP",
        bundle: {
            image: "url_imagem_bundle_radiantcrisis",
            name: "Radiant Crisis 001 Collection",
            price: "7100 VP"
        },
        variants: ["Original"],
        rarity: "Premium"
    },
    {
        id: 9,
        images: "url_imagem_skin9",
        name: "Reaver Knife",
        weapon: "Melee (Knife)",
        price: "3550 VP",
        bundle: {
            image: "url_imagem_bundle_reaver_knife",
            name: "Reaver Collection",
            price: "7100 VP"
        },
        variants: ["Original"],
        rarity: "Premium"
    }
];

app.use(cors());
app.use(express.json());

app.get('/skins', (req, res) => {
    res.json({
        error: false,
        message: 'Busca realizada com sucesso.',
        data: skins
    });
});

app.post('/skins', (req, res) => {
    const { images, name, weapon, price, bundle, variants, rarity } = req.body;
    const newSkin = {
        id: skins.length + 1,
        images,
        name,
        weapon,
        price,
        bundle,
        variants,
        rarity
    };
    skins = [...skins, newSkin]
    res.json({
        error: false,
        message: 'Skin adicionada com sucesso.',
    });
});

app.put('/skins/:id', (req, res) => {
    res.send('Olá mundo');
});

app.delete('/skins/:id', (req, res) => {
    const id = req.params.id;
    const newSkins = skins.filter(skin => skin.id != id);
    skins = newSkins;
    res.json({
        error: false,
        message: 'Skin excluida com sucesso.',
        data: newSkins
    });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});